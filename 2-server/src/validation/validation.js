const Joi = require('joi');

const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,60}$/;
const phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

//Register validation
exports.registerValidation = data => {
	const schema = Joi.object({
		firstName: Joi.string().allow(null, '').max(60),
		lastName: Joi.string().allow(null, '').max(60),
		username: Joi.string().min(4).max(60).required(),
		email: Joi.string().required().email(),
		password: Joi.string()
			.pattern(new RegExp(passwordRe))
			.error(errors => {
				errors.forEach(err => {
					if (err.code) {
						err.message =
							'Password must have at least 8 characters. One uppercase letter, numeric character and special character.';
					}
				});
				return errors;
			}),

		confirmPassword: Joi.ref('password')
	});

	// console.log(schema.validate(data).error);

	return schema.validate(data);
};

//Creating post validation
exports.postValidation = data => {
	const schema = Joi.object({
		title: Joi.string().min(3).max(60).required(),
		content: Joi.string().min(15).required(),
		type: Joi.string().required()
	});

	return schema.validate(data);
};

exports.contactEmailValdiation = data => {
	const schema = Joi.object({
		name: Joi.string().allow(null, '').max(60),
		subject: Joi.string().min(3).max(60).required(),
		email: Joi.string().required().email(),
		message: Joi.string().min(15).required()
	});

	return schema.validate(data);
};

//Editing user validaton
exports.editProfileValidation = data => {
	const schema = Joi.object({
		firstName: Joi.string().allow(null, '').max(60),
		lastName: Joi.string().allow(null, '').max(60),
		username: Joi.string().min(4).max(60).required(),
		email: Joi.string().required().email(),
		phone: Joi.string()
			.allow(null, '')
			.pattern(new RegExp(phoneRe))
			.error(errors => {
				errors.forEach(err => {
					if (err.code === 'string.pattern.base') {
						err.message = 'Please enter valid format. E.g. +38733112233.';
					} else {
						err.message = 'Please enter valid format. E.g. +38733112233.';
					}
				});
				return errors;
			}),
		birthday: Joi.date().allow(null, '')
	});

	return schema.validate(data);
};

//Change password
exports.changePasswordValidation = data => {
	const schema = Joi.object({
		oldPassword: Joi.string()
			.pattern(new RegExp(passwordRe))
			.error(errors => {
				errors.forEach(err => {
					if (err.code === 'string.pattern.base') {
						err.message =
							'Password must have at least 8 characters. One uppercase letter, numeric character and special character.';
					} else {
						err.message =
							'Password must have at least 8 characters. One uppercase letter, numeric character and special character.';
					}
				});
				return errors;
			}),
		password: Joi.string()
			.pattern(new RegExp(passwordRe))
			.error(errors => {
				errors.forEach(err => {
					if (err.code === 'string.pattern.base') {
						err.message =
							'Password must have at least 8 characters. One uppercase letter, numeric character and special character.';
					} else {
						err.message =
							'Password must have at least 8 characters. One uppercase letter, numeric character and special character.';
					}
				});
				return errors;
			}),
		confirmPassword: Joi.ref('password')
	});

	return schema.validate(data);
};

//Reset password
exports.resetPasswordValidation = data => {
	const schema = Joi.object({
		password: Joi.string()
			.pattern(new RegExp(passwordRe))
			.error(errors => {
				errors.forEach(err => {
					if (err.code === 'string.pattern.base') {
						err.message =
							'Password must have at least 8 characters. One uppercase letter, numeric character and special character.';
					} else {
						err.message =
							'Password must have at least 8 characters. One uppercase letter, numeric character and special character.';
					}
				});
				return errors;
			}),
		confirmPassword: Joi.ref('password')
	});

	return schema.validate(data);
};

//Comments validation
exports.commentValidation = data => {
	const schema = Joi.object({
		comment: Joi.string().min(3)
	});

	return schema.validate(data);
};
