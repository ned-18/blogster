'use strict';

const DATABASE_USER = process.env.DATABASE_USER || 'postgres';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'password';
const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
const DATABASE_PORT = process.env.DATABASE_PORT || '5432';
const DATABASE_NAME_DEVELOPMENT = process.env.DATABASE_NAME_DEVELOPMENT || 'blogster';
const DATABASE_NAME_TEST = process.env.DATABASE_NAME_TEST || 'blogster_test';

let DATABASE_URL;

if (process.env.NODE_ENV === 'test') {
	DATABASE_URL = `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME_TEST}`;
}

if (process.env.NODE_ENV === 'development') {
	DATABASE_URL = `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME_DEVELOPMENT}`;
}

module.exports = {
	DATABASE_URL: DATABASE_URL,
	DATABASE_POOL_MAX_SIZE: parseInt(process.env.DATABASE_POOL_MAX_SIZE) || 5,
	DATABASE_POOL_MIN_SIZE: parseInt(process.env.DATABASE_POOL_MIN_SIZE) || 1,

	PORT: process.env.PORT || 3000,

	EMAIL_USERNAME: process.env.EMAIL_USERNAME || 'email',
	EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || 'password'
};
