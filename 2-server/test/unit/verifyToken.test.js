const expect = require('chai').expect;
const sinon = require('sinon');
const jwt = require('jsonwebtoken');

const verifyToken = require('../../src/middlewares/verifyToken');

describe('Auth middleware verify token', () => {
	let sandbox;

	beforeEach(() => {
		sandbox = sinon.createSandbox();
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should throw an error if no cookies with auth token', () => {
		const req = {
			cookies: {
				authToken: null
			}
		};

		expect(verifyToken.bind(this, req, {}, () => {})).to.throw('Access Denied');
	});

	it('should yield id, username and profileIamge if auth token is string', () => {
		const req = {
			cookies: {
				authToken: 'fake auth token'
			}
		};
		sandbox.stub(jwt, 'verify');
		jwt.verify.returns({ id: 1, username: 'username', profileImage: 'http://localhost:3000/image' });
		verifyToken(req, {}, () => {});
		expect(req.cookies.authToken).to.be.string;
		expect(req).to.have.property('user');
		expect(req.user).to.have.property('id');
		expect(req.user).to.have.property('username');
		expect(req.user).to.have.property('profileImage');
		expect(jwt.verify.called).to.be.true;
	});
});
