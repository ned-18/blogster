const { StatusCodes } = require('http-status-codes');
const createError = require('http-errors');
const { contactMe } = require('../helpers/emailHelper');
const { contactEmailValdiation } = require('../validation/validation');

exports.contactMe = async (req, res, next) => {
	try {
		//Validation email and message
		let { name, subject, email, message } = req.body;

		const { error } = contactEmailValdiation(req.body);
		if (error) return next(createError.BadRequest(error.details[0].message));

		if (name === '' || name === null) {
			const newName = email.split('@');
			name = newName[0];
		}
		contactMe({
			name,
			subject,
			email,
			message
		});

		return res.status(StatusCodes.OK).json({
			success: true,
			message: 'Email was sent successfully.'
		});
	} catch (error) {
		next(error);
	}
};
