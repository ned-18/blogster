'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('posts', 'userId', {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'users',
				key: 'id'
			},
			onDelete: 'SET NULL'
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('posts', 'userId');
	}
};
