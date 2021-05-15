const { expect } = require('chai');
const request = require('supertest');

const app = require('../../app');

describe('POST /api/auth/login, login user', () => {
	it('should be throw if user dosent exist', async () => {
		const res = await request(app).post('/api/auth/login').send({
			usernameOrEmail: 'notuser',
			password: 'notPassword1!'
		});

		expect(res.body).to.have.property('status', 401);
		expect(res.body).to.have.property('success', false);
		expect(res.body).to.have.property('message', 'Your credentials are not valid!');
	});

	it('should login user', async () => {
		const res = await request(app).post('/api/auth/login').send({
			usernameOrEmail: 'hdoe',
			password: 'Password123456!'
		});
		expect(res.status).to.be.equal(200);
		expect(res.body).to.have.property('success', true);
		expect(res.body).to.have.property('message');
		expect(res.body.message).to.be.a('string');
		expect(res.body).to.have.property('user');
		expect(res.body).to.be.a('object');
	});
});
