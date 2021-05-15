'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		static associate({ User, Post }) {
			this.belongsTo(User, { foreignKey: 'userId', as: 'user' });
			this.belongsTo(Post, { foreignKey: 'postId', as: 'post' });
		}
	}
	Comment.init(
		{
			comment: {
				type: DataTypes.TEXT,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'comments',
			modelName: 'Comment'
		}
	);
	return Comment;
};
