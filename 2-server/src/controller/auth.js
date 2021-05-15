const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const { isNull } = require('lodash');
const { emailVerification } = require('../helpers/emailHelper');
const { registerValidation } = require('../validation/validation');
const log = require('../logger');
const { User } = require('../db/models');

const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'), 'utf8');
const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'), 'utf8');

const maxAge = 3 * 24 * 60 * 60; //sec

//Register user
exports.registerUser = async (req, res, next) => {
	try {
		// Validation body
		const { error } = registerValidation(req.body);
		if (error) return next(createError.BadRequest(error.details[0].message));

		let { firstName, lastName, username, email, password } = req.body;

		//Hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const resetToken = crypto.randomBytes(32).toString('hex');
		const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
		const expiresToken = Date.now() + 10 * 60 * 1000;

		const [respone, created] = await User.findOrCreate({
			where: {
				[Op.or]: [{ email }, { username }]
			},
			defaults: {
				firstName,
				lastName,
				username,
				email,
				password: hashedPassword,
				emailToken: hashedToken,
				emailTokenExpires: expiresToken
			},
			paranoid: false
		});

		if (created) {
			await emailVerification({ title: 'Thank you for registering on our site.', token: resetToken, email });

			log.info(`user[${respone.id}] is created`);
			return res.status(StatusCodes.CREATED).json({
				success: true,
				message: 'You have registered successfully. Please verify your email!',
				user: respone.id
			});
		}

		if (respone.username === username) return next(createError.BadRequest('Username already exists!'));
		if (respone.email === email) return next(createError.BadRequest('Email already exists!'));
	} catch (error) {
		next(error);
	}
};

//Login user
exports.loginUser = async (req, res, next) => {
	try {
		let { usernameOrEmail, password } = req.body;
		let message;

		const user = await User.findOne({
			where: {
				[Op.or]: [{ email: usernameOrEmail }, { username: usernameOrEmail }]
			},
			paranoid: false
		});

		if (!user) return next(createError.Unauthorized('Your credentials are not valid!'));

		// Checking if user is verified
		if (!user.isVerified) return next(createError.Unauthorized('Your account is not verified. Please verify it!'));

		//Checking if password is correct
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) return next(createError.Unauthorized('Your credentials are not valid!'));

		//Create and assign a token
		const payload = {
			id: user.id,
			username: user.username,
			profileImage: user.profileImgUrl
		};

		const token = jwt.sign(payload, privateKey, {
			algorithm: 'RS256',
			expiresIn: maxAge
		});

		// Save user's token in cookie
		res.cookie('authToken', token, { httpOnly: true, maxAge: maxAge * 1000 });

		// Restore account
		if (user.deletedAt) {
			await User.restore({ where: { id: user.id } });
			message = 'You have restored your account. Welcome back!';
		}

		if (isNull(user.deletedAt)) message = 'You have logged in successfully.';

		log.info(`user[${user.id}] has logged in `);
		return res.status(StatusCodes.OK).json({
			success: true,
			message,
			user: { id: user.id, username: user.username, email: user.email, profileImage: user.profileImgUrl }
		});
	} catch (error) {
		next(error);
	}
};

//Logout user
exports.logout = (req, res) => {
	res.cookie('authToken', '', { maxAge: 1 });
	log.info(`user has logged out `);
	res.status(StatusCodes.OK).json({ success: true, message: 'You are logged out!' });
};

//Check is user authenticated
exports.checkAuth = async (req, res) => {
	const token = req.cookies.authToken;

	if (token) {
		jwt.verify(token, publicKey, { algorithm: 'RS256' }, async (error, decodedToken) => {
			if (error) {
				return res.status(StatusCodes.OK).json({ authenticated: false, username: null, profileImage: null });
			} else {
				const user = await User.findByPk(decodedToken.id);
				return res
					.status(StatusCodes.OK)
					.json({ authenticated: true, username: user.username, profileImage: user.profileImgUrl });
			}
		});
	} else {
		return res.status(StatusCodes.OK).json({ authenticated: false, username: null, profileImage: null });
	}
};
