const fs = require('fs');
const path = require('path');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'), 'utf8');

module.exports = function (req, res, next) {
	const token = req.cookies.authToken;
	if (!token) throw createError.Unauthorized('Access Denied');

	try {
		const verified = jwt.verify(token, publicKey);
		req.user = verified;
		next();
	} catch (error) {
		throw createError.Unauthorized('Access Denied');
	}
};
