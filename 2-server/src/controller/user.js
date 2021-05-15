const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const moment = require('moment');
const bcrypt = require('bcrypt');
const multer = require('multer');
const log = require('../logger');
const { Op } = require('sequelize');
const { profileImageResize } = require('../helpers/profileImageResize');
const { editProfileValidation, changePasswordValidation } = require('../validation/validation');

const { User, Post, Comment } = require('../db/models');

// Get user profile
exports.getProfile = async (req, res, next) => {
	try {
		const id = req.user.id;
		const iat = req.user.iat;
		const exp = req.user.exp;

		const user = await User.findOne({
			where: { id },
			include: [
				{
					model: Post,
					as: 'post',
					attributes: { exclude: ['userId'] }
				},
				{
					model: Comment,
					as: 'comment',
					attributes: { exclude: ['postId, userId'] }
				}
			],
			attributes: ['id', 'profileImgUrl', 'firstName', 'lastName', 'username', 'email', 'birthday', 'phone']
		});

		const data = {
			success: true,
			data: user,
			iat,
			exp
		};

		return res.status(StatusCodes.OK).json(data);
	} catch (error) {
		next(error);
	}
};

// Update user data
exports.updateProfile = async (req, res, next) => {
	try {
		const id = req.user.id;
		let { firstName, lastName, username, email, phone, birthday } = req.body;
		//Validation body
		const { error } = editProfileValidation(req.body);
		if (error) return next(createError.BadRequest(error.details[0].message));

		birthday = moment().format(birthday);
		const validateUser = await User.findOne({
			where: {
				[Op.and]: [{ id: { [Op.not]: id } }, { [Op.or]: [{ email }, { username }] }]
			}
		});
		if (validateUser?.username === username) return next(createError.BadRequest('Username already exists!'));
		if (validateUser?.email === email) return next(createError.BadRequest('Email already exists!'));

		const user = await User.update({ firstName, lastName, username, email, phone, birthday }, { where: { id } });
		if (!user[0]) return next(createError.NotFound('User not found.'));

		log.info(`user's profile[${id}] has updated`);
		return res
			.status(StatusCodes.OK)
			.json({ success: true, message: 'You are updated your profile successfully.', user: user.id });
	} catch (error) {
		next(error);
	}
};

//Change password
exports.changePassword = async (req, res, next) => {
	try {
		const id = req.user.id;
		const { oldPassword, password } = req.body;
		//Validation body
		const { error } = changePasswordValidation(req.body);
		if (error) return next(createError.BadRequest(error.details[0].message));

		const user = await User.findByPk(id, { paranoid: false });
		if (!user) return next(createError.NotFound('User not found!'));

		const validPassword = await bcrypt.compare(oldPassword, user.password);
		if (!validPassword) return next(createError.Unauthorized('Old password is invalid!'));

		//Hash passwords
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		await User.update({ password: hashedPassword }, { where: { id } });

		log.info(`user[${id}] has changed password`);
		return res.status(StatusCodes.OK).json({ success: true, message: 'You changed password successfully.' });
	} catch (error) {
		next(error);
	}
};

// Upload profile image
exports.uploadProfileImage = async (req, res, next) => {
	try {
		const url = req.protocol + '://' + req.get('host');
		const id = req.user.id;

		const mimeType = req.file.mimetype.split('/');
		const fileType = mimeType[1];
		const fileName = Date.now() + '-' + 'profile-image' + '.' + fileType;

		profileImageResize(req, fileName);
		const user = await User.update({ profileImgUrl: url + '/src/uploads/images/' + fileName }, { where: { id } });
		if (!user[0]) return next(createError.NotFound('User not found.'));

		log.info(`user[${id}] has uploaded profile image`);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: 'You uploaded the profile image successfully',
			profileImgUrl: url + '/src/uploads/images/' + fileName
		});
	} catch (error) {
		if (error instanceof multer.MulterError) {
			return next(createError.BadRequest('File is not supported.'));
		}
		next(error);
	}
};

// Delete users profile SOFT
exports.deleteProfile = async (req, res, next) => {
	try {
		const id = req.user.id;
		const { password } = req.body;

		const user = await User.findByPk(id);
		if (!user) return next(createError.NotFound('User not found'));

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) return next(createError.Unauthorized('Password is invalid!'));

		if (validPassword) await User.destroy({ where: { id } });

		log.info(`user[${id}] deleted`);
		return res
			.status(StatusCodes.OK)
			.json({ success: true, message: 'You are deleted your account successfully.' });
	} catch (error) {
		next(error);
	}
};
