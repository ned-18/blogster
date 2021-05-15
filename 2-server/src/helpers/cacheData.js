const redis = require('redis');
const { promisify } = require('util');
const log = require('../logger');

const client = redis.createClient({
	host: '127.0.0.1',
	port: 6379
});

client.set = promisify(client.set);

exports.setToRedis = async (key, data, next) => {
	try {
		await client.set(key, JSON.stringify(data), 'EX', 30);
		log.info('Data are cached.');
	} catch (error) {
		next(error);
	}
};
