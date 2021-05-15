'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate({ Post, Comment }) {
			// define association here
			this.hasMany(Post, { foreignKey: 'userId', as: 'post' });
			this.hasMany(Comment, { foreignKey: 'userId', as: 'comment' });
		}
	}
	User.init(
		{
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
			}
		},
		{
			sequelize,
			paranoid: true,
			tableName: 'users',
			modelName: 'User'
		}
	);
	return User;
};
