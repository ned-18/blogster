const crypto = require('crypto');
const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');

const { User } = require('../db/models');

// Email verification route
exports.emailVerification = async (req, res, next) => {
	try {
		const { token } = req.query;

		// Create hashed token for verification user's mail
		const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

		const user = await User.update(
			{ emailToken: null, emailTokenExpires: null, isVerified: true },
			{
				where: {
					[Op.and]: [{ emailToken: hashedToken }, { emailTokenExpires: { [Op.gt]: Date.now() } }]
				}
			}
		);
		if (!user[0]) return next(createError.BadRequest('Token is invalid or has expired.'));

		return res.status(StatusCodes.OK).json({
			success: true,
			message: 'You have successfully verified your mail. You can log in now.'
		});
	} catch (error) {
		next(error);
	}
};
