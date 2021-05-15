'use strict';
module.exports = {
	up: async (queryInterface, DataTypes) => {
		await queryInterface.sequelize.transaction(async transaction => {
			await queryInterface.createTable(
				'users',
				{
					id: {
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
						type: DataTypes.INTEGER
					},
					profileImgUrl: {
						type: DataTypes.STRING
					},
					firstName: {
						type: DataTypes.STRING
					},
					lastName: {
						type: DataTypes.STRING
					},
					username: {
						type: DataTypes.STRING,
						allowNull: false,
						unique: true
					},
					email: {
						type: DataTypes.STRING,
						allowNull: false,
						unique: true
					},
					password: {
						type: DataTypes.STRING,
						allowNull: false
					},
					birthday: {
						type: DataTypes.DATEONLY
					},
					phone: {
						type: DataTypes.STRING
					},
					emailToken: {
						type: DataTypes.STRING
					},
					emailTokenExpires: {
						type: DataTypes.DATE
					},
					isVerified: {
						type: DataTypes.BOOLEAN,
						allowNull: false,
						defaultValue: false
					},
					passwordResetToken: {
						type: DataTypes.STRING
					},
					passwordResetExpires: {
						type: DataTypes.DATE
					},
					createdAt: {
						allowNull: false,
						type: DataTypes.DATE
					},
					updatedAt: {
						allowNull: false,
						type: DataTypes.DATE
					},
					deletedAt: {
						type: DataTypes.DATE
					}
				},
				{
					transaction
				}
			);

			const insertDefaultUser =
				'INSERT INTO users (username, email, password, "isVerified", "createdAt", "updatedAt") VALUES(:username, :email, :password, :isVerified, :createdAt, :updatedAt)';

			await queryInterface.sequelize.query(insertDefaultUser, {
				replacements: {
					username: 'hdoe',
					email: 'hdoe@email.com',
					password: '$2b$10$GL.pdB4U4s2mYKXXg.OOYelESocKYzggHcxUrQkxA767O9edU.6Ny', // Password123456!
					isVerified: true,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				type: queryInterface.sequelize.QueryTypes.INSERT,
				transaction
			});
		});
	},
	down: async (queryInterface, DataTypes) => {
		await queryInterface.dropTable('users');
	}
};
