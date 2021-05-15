const { expect } = require('chai');
const request = require('supertest');

const app = require('../../app');

describe('POST /api/auth/register, create user', () => {
	it('should be throw if username is empty', async () => {
		const res = await request(app).post('/api/auth/register').send({
			username: '',
			email: 'email@email.com',
			password: 'Password123456!',
			confirmPassword: 'Password123456!'
		});

		expect(res.body).to.have.property('status', 400);
		expect(res.body).to.have.property('success', false);
		expect(res.body).to.have.property('message', '"username" is not allowed to be empty');
	});

	it('should be throw if email is empty', async () => {
		const res = await request(app).post('/api/auth/register').send({
			username: 'username',
			email: '',
			password: 'Password123456!',
			confirmPassword: 'Password123456!'
		});
		expect(res.body).to.have.property('status', 400);
		expect(res.body).to.have.property('success', false);
		expect(res.body).to.have.property('message', '"email" is not allowed to be empty');
	});

	it('should be throw if email is not valid', async () => {
		const res = await request(app).post('/api/auth/register').send({
			username: 'username',
			email: 'email',
			password: 'Password123456!',
			confirmPassword: 'Password123456!'
		});
		expect(res.body).to.have.property('status', 400);
		expect(res.body).to.have.property('success', false);
		expect(res.body).to.have.property('message', '"email" must be a valid email');
	});

	it('should be throw if password is not valid', async () => {
		const res = await request(app).post('/api/auth/register').send({
			username: 'username',
			email: 'email@email.com',
			password: 'Password',
			confirmPassword: 'Password'
		});
		expect(res.body).to.have.property('status', 400);
		expect(res.body).to.have.property('success', false);
		expect(res.body).to.have.property(
			'message',
			'Password must have at least 8 characters. One uppercase letter, numeric character and special character.'
		);
	});

	it('should be throw if passwords dont match', async () => {
		const res = await request(app).post('/api/auth/register').send({
			username: 'username',
			email: 'email@email.com',
			password: 'Password123456!',
			confirmPassword: 'Password1234567!'
		});
		expect(res.body).to.have.property('status', 400);
		expect(res.body).to.have.property('success', false);
		expect(res.body).to.have.property('message', '"confirmPassword" must be [ref:password]');
	});

	it('should create new user', async () => {
		const res = await request(app).post('/api/auth/register').send({
			username: 'username',
			email: 'email@email.com',
			password: 'Password123456!',
			confirmPassword: 'Password123456!'
		});

		expect(res.status).to.be.equal(201);
		expect(res.body).to.have.property('success', true);
		expect(res.body).to.have.property('message');
		expect(res.body).to.have.property('user');
		expect(res.body.user).to.be.a('number');
		expect(res.body.message).to.be.a('string');
	});
});
