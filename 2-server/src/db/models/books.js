'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Books extends Model {
		static associate(models) {
			// define association here
		}
	}
	Books.init(
		{
			imageUrl: {
				type: DataTypes.STRING,
				allowNull: false
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false
			},
			price: {
				type: DataTypes.DECIMAL,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'books',
			modelName: 'Books'
		}
	);

	return Books;
};
