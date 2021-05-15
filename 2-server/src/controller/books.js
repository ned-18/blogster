const { StatusCodes } = require('http-status-codes');
const { Books } = require('../db/models');
const { setToRedis } = require('../helpers/cacheData');

exports.getAllBooks = async (req, res, next) => {
	try {
		const books = await Books.findAll({ attributes: ['id', 'imageUrl', 'title', 'price'] });
		const data = {
			success: true,
			data: books
		};
		//Set data to Redis
		setToRedis('books', data, next);
		return res.status(StatusCodes.OK).json(data);
	} catch (error) {
		next(error);
	}
};

exports.getOneBook = async (req, res, next) => {
	try {
		const { bookId } = req.params;
		const book = await Books.findByPk(bookId, { attributes: ['id', 'imageUrl', 'title', 'price'] });

		return res.status(StatusCodes.OK).json({
			success: true,
			data: book
		});
	} catch (error) {
		next(error);
	}
};
