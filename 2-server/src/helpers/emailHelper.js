const nodemailer = require('nodemailer');
const sanitizeHtml = require('sanitize-html');
const config = require('../../config');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: config.EMAIL_USERNAME,
		pass: config.EMAIL_PASSWORD
	},
	tls: { rejectUnauthorized: false }
});

cleanHtml = output => {
	return sanitizeHtml(output, {
		allowedTags: ['h1', 'h2', 'h3', 'li', 'ul', 'a', 'b', 'em', 'i', 'span', 'strong'],
		disallowedTagsMode: 'discard',
		allowedAttributes: {
			a: ['href'],
			img: ['src']
		},
		selfClosing: ['img', 'br', 'hr', 'area', 'input']
	});
};

mailOptions = options => {
	return {
		from: options.from,
		to: options.email,
		subject: options.subject,
		html: options.cb
	};
};

exports.emailVerification = async options => {
	const url = 'http://localhost:4200/verification';

	const output = `
		<h3>${options.title}</h3>
		<p>By clicking on the following link, you are confirming your email address.</p>
		<a href="${url}?token=${options.token}"> Verify your account</a>
	`;

	await transporter.sendMail(
		mailOptions({
			from: config.EMAIL_USERNAME,
			email: options.email,
			subject: 'Blogster - verify your email',
			cb: cleanHtml(output)
		})
	);
};

exports.resetPassword = async options => {
	const url = 'http://localhost:4200/password/reset-password';

	const output = `
		<h3>Reset your password</h3>
		<p>By clicking on the following link, you will be able to reset your password.</p>
		<a href="${url}?token=${options.token}">Reset password</a>
	`;

	await transporter.sendMail(
		mailOptions({
			from: config.EMAIL_USERNAME,
			email: options.email,
			subject: 'Blogster - reset your password',
			cb: cleanHtml(output)
		})
	);
};

exports.contactMe = async options => {
	const output = `
		<h3>Contact Details</h3>
		<ul>
			<li>Name: ${options.name}</li>
			<li>Email: ${options.email}</li>
		</ul>
		<h3>Message</h3>
		<p>${options.message}</p>
	`;

	await transporter.sendMail(
		mailOptions({
			from: options.email,
			email: config.EMAIL_USERNAME,
			subject: `Message from ${options.email}: ${options.subject}`,
			to: cleanHtml(output)
		})
	);
};
