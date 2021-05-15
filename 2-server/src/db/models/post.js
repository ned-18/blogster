'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		static associate({ User, Comment }) {
			this.belongsTo(User, { foreignKey: 'userId', as: 'user' });
			this.hasMany(Comment, { foreignKey: 'postId', as: 'comment' });
		}
	}
	Post.init(
		{
			imageUrl: {
				type: DataTypes.STRING,
				allowNull: false
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'posts',
			modelName: 'Post'
		}
	);
	return Post;
};
