const redis = require('redis');
const { promisify } = require('util');
const log = require('../logger');

const client = redis.createClient({
	host: '127.0.0.1',
	port: 6379
});

client.get = promisify(client.get);
client.del = promisify(client.del);

exports.getCachedData = (key, param) => {
	return async (req, res, next) => {
		try {
			const reply = await client.get(key || req.query[param]);
			if (reply) {
				log.info('Cached data.');
				return res.status(200).send(JSON.parse(reply));
			} else {
				next();
			}
		} catch (error) {
			next(error);
		}
	};
};

exports.clearCachedData = (key, param) => {
	return async (req, res, next) => {
		try {
			await client.del(key || req.query[param]);
			log.info('Cached data cleared.');
			next();
		} catch (error) {
			next(error);
		}
	};
};
