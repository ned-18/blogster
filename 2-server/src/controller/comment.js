const createError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const { setToRedis } = require('../helpers/cacheData');
const log = require('../logger');
const { commentValidation } = require('../validation/validation');

const { Comment, User, Post } = require('../db/models');

exports.createComment = async (req, res, next) => {
	try {
		//Validation body
		const { error } = commentValidation(req.body);
		if (error) return next(createError.BadRequest(error.details[0].message));

		const { comment } = req.body;
		const id = req.user.id;
		const postId = Number.parseInt(req.query.postId);

		if (!postId) return next(createError.BadRequest('Something went wrong'));

		const user = await User.findOne({
			where: { id },
			include: [{ model: Post, as: 'post', where: { id: postId }, require: false }]
		});

		if (!user) return next(createError.NotFound('User not found.'));

		const newComment = await user.createComment({
			comment,
			userId: user.id,
			postId: user.post[0].id
		});

		log.info(`user[${id}] has created comment[${newComment.id}] `);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: 'You commented on the post successfully.',
			newComment
		});
	} catch (error) {
		next(error);
	}
};

exports.getComments = async (req, res, next) => {
	try {
		const postId = Number.parseInt(req.query.postId);

		const comments = await Comment.findAll({
			where: { postId },
			attributes: { exclude: ['updatedAt'] },
			include: [
				{
					model: User,
					as: 'user',
					attributes: ['id', 'profileImgUrl', 'username'],
					paranoid: false
				}
			]
		});

		const post = await Post.findByPk(postId);
		const postTitle = post.title;

		const data = {
			success: true,
			comments,
			postTitle
		};
		//Set data to Redis
		setToRedis(postId, data);
		return res.status(StatusCodes.OK).json(data);
	} catch (error) {
		next(error);
	}
};

exports.deleteComment = async (req, res, next) => {
	try {
		const { commentId } = req.params;

		const comment = await Comment.destroy({ where: { id: commentId } });
		if (!comment) return next(createError.NotFound('Comment not found'));
		log.info(`comment[${commentId}] deleted`);
		return res.status(StatusCodes.OK).json({ success: true, message: 'You are deleted comment successfully.' });
	} catch (error) {
		next(error);
	}
};
