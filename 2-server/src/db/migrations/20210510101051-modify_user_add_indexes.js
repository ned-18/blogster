'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addIndex('users', ['username', 'email'], {
			name: 'users_username_email',
			unique: true
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeIndex('users', ['username', 'email'], {
			name: 'users_username_email',
			unique: true
		});
	}
};
