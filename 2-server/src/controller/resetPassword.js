const bcrypt = require('bcrypt');
const crypto = require('crypto');
const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const { resetPassword } = require('../helpers/emailHelper');
const { resetPasswordValidation } = require('../validation/validation');

const { User } = require('../db/models');

//Forgot password
exports.forgotPassword = async (req, res, next) => {
	try {
		const { email } = req.body;

		// Create reset token
		const resetToken = crypto.randomBytes(32).toString('hex');
		const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
		const expiresToken = Date.now() + 10 * 60 * 1000;

		const user = await User.update(
			{ passwordResetToken: hashedToken, passwordResetExpires: expiresToken },
			{ where: { email } }
		);

		if (!user[0]) return next(createError.Unauthorized('User not found!'));

		await resetPassword({ token: resetToken, email });

		return res.status(StatusCodes.OK).json({
			success: true,
			message: 'Email was sent successfully. Check your email!'
		});
	} catch (error) {
		next(error);
	}
};

//Reset password
exports.resetPassword = async (req, res, next) => {
	const { token } = req.query;
	const { password } = req.body;

	// Validation body
	const { error } = resetPasswordValidation(req.body);
	if (error) return next(createError.BadRequest(error.details[0].message));

	//Hash new password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

	try {
		const user = await User.update(
			{ password: hashedPassword, passwordResetToken: null, passwordResetExpires: null },
			{
				where: { passwordResetToken: hashedToken, passwordResetExpires: { [Op.gt]: Date.now() } }
			}
		);
		if (!user[0]) return next(createError.BadRequest('Token is invalid or has expired.'));

		return res
			.status(StatusCodes.OK)
			.json({ success: true, message: 'You have successfully reset your password. You can log in now.' });
	} catch (error) {
		next(error);
	}
};
