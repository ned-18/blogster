module.exports = {
	up(queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.addColumn('comments', 'postId', {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'posts',
					key: 'id'
				},
				onDelete: 'SET NULL'
			}),
			queryInterface.addColumn('comments', 'userId', {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'users',
					key: 'id'
				},
				onDelete: 'SET NULL'
			})
		]);
	},

	down(queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.removeColumn('comments', 'postId'),
			queryInterface.removeColumn('comments', 'userId')
		]);
	}
};
