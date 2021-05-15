const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const log = require('./src/logger');
const createError = require('http-errors');
const { Sequelize } = require('./src/db/models');

const authRouter = require('./src/routes/auth');
const userRouter = require('./src/routes/user');
const emailVerificationRouter = require('./src/routes/emailVerification');
const resetPassword = require('./src/routes/resetPassword');
const postRouter = require('./src/routes/post');
const contactMeRouter = require('./src/routes/contactMe');
const commentRouter = require('./src/routes/comment');
const booksRouter = require('./src/routes/books');

const app = express();

app.use(helmet());
app.use(
	cors({
		origin: 'http://localhost:4200',
		methods: ['GET, POST, OPTIONS, PUT, PATCH, DELETE'],
		allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept',
		credentials: true
	})
);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/src/uploads/images', express.static(path.join('src/uploads/images')));

app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api', userRouter);
app.use('/api', emailVerificationRouter);
app.use('/api', resetPassword);
app.use('/api', postRouter);
app.use('/api', contactMeRouter);
app.use('/api', commentRouter);
app.use('/api', booksRouter);

// 404
app.use('**', (next, req, res) => {
	throw createError.NotFound('Route not found or method is invalid.');
});

//Error handling
app.use((error, req, res, next) => {
	log.error(error);

	res.status(error.status || 500);

	const err = res.json({
		success: false,
		status: error.status || 500,
		message: error.message
	});

	if (error instanceof Sequelize.DatabaseError) {
		return err;
	}

	err;
});

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public/index.html'));
// });

module.exports = app;
