const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const multer = require('multer');
const { parseInt, isEmpty } = require('lodash');
const log = require('../logger');
const { postValidation } = require('../validation/validation');

const { User, Post, Comment } = require('../db/models');

// /posts?page=0&limit=2&type=type
exports.getAllPosts = async (req, res, next) => {
	try {
		const page = parseInt(req.query.page) || 0;
		const limit = parseInt(req.query.limit) || 2;

		const whereClause = {};

		if (req.query.type) {
			whereClause.type = req.query.type;
		}

		const query = {
			distinct: true,
			limit,
			offset: page * limit,
			order: [['createdAt', 'DESC']],
			include: [
				{ model: User, as: 'user', attributes: ['id', 'username'], paranoid: false },
				{ model: Comment, as: 'comment', attributes: { exclude: ['updatedAt'] } }
			]
		};

		if (!isEmpty(whereClause)) {
			query.where = whereClause;
		}

		const posts = await Post.findAndCountAll(query);

		const data = {
			success: true,
			data: posts.rows,
			totalPosts: posts.count
		};

		return res.status(StatusCodes.OK).json(data);
	} catch (error) {
		next(error);
	}
};

exports.getPost = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const post = await Post.findOne({
			where: { id: postId },
			include: [
				{ model: User, as: 'user', attributes: ['id', 'username'], paranoid: false },
				{ model: Comment, as: 'comment', attributes: { exclude: ['updatedAt'] }, required: false }
			]
		});
		if (!post) return next(createError.NotFound('Post not found.'));

		const data = {
			success: true,
			data: post
		};

		return res.status(StatusCodes.OK).json(data);
	} catch (error) {
		next(error);
	}
};

exports.createPost = async (req, res, next) => {
	try {
		//Validation body
		const { error } = postValidation(req.body);
		if (error) return next(createError.BadRequest(error.details[0].message));

		const { title, content, type } = req.body;

		const url = req.protocol + '://' + req.get('host');
		const id = req.user.id;

		const user = await User.findByPk(id);
		if (!user) return next(createError.NotFound('User not found.'));

		const post = await user.createPost({
			imageUrl: url + '/src/uploads/images/' + req.file.filename,
			title,
			content,
			type,
			userId: user.id
		});

		log.info(`user[${id}] has created post[${post.id}] `);
		return res.status(201).json({
			success: true,
			message: 'You are created post successfully.',
			post
		});
	} catch (error) {
		if (error instanceof multer.MulterError) {
			return next(createError.BadRequest('File is not supported or is too large.'));
		}
		next(error);
	}
};

exports.updatePost = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const body = {
			title: req.body.title,
			content: req.body.content,
			type: req.body.type
		};

		let imageUrl = req.body.imageUrl;

		if (req.file) {
			const url = req.protocol + '://' + req.get('host');
			imageUrl = url + '/src/uploads/images/' + req.file.filename;
		}

		if (!imageUrl) {
			return next(createError.NotFound('No file picked!'));
		}

		//Validation body
		const { error } = postValidation(body);
		if (error) return next(createError.BadRequest(error.details[0].message));

		const post = await Post.update(
			{ imageUrl, title: body.title, content: body.content, type: body.type },
			{ where: { id: postId } }
		);
		if (!post[0]) return next(createError(404, 'Post not found'));
		log.info(`post[${postId}] updated`);
		return res.status(StatusCodes.OK).json({ success: true, message: 'You are updated post successfully.' });
	} catch (error) {
		if (error instanceof multer.MulterError) {
			return next(createError.BadRequest('File is not supported or is too large.'));
		}
		next(error);
	}
};

exports.deletePost = async (req, res, next) => {
	try {
		const { postId } = req.params;

		const post = await Post.destroy({ where: { id: postId } });
		if (!post) return next(createError.NotFound('Post not found'));
		log.info(`post[${postId}] deleted`);
		return res.status(StatusCodes.OK).json({ success: true, message: 'You are deleted post successfully.' });
	} catch (error) {
		next(error);
	}
};
