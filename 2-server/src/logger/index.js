const buildDevLogger = require('./dev-logger');
const buildProdLogger = require('./prod-logger');

let log = null;
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
	log = buildDevLogger();
} else {
	log = buildProdLogger();
}

module.exports = log;
