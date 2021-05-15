const express = require('express');
const router = express.Router();
const { getCachedData } = require('../middlewares/cachedData');

const booksController = require('../controller/books');

//Get books
router.get('/books', getCachedData('books'), booksController.getAllBooks);

router.get('/books/:bookId', booksController.getOneBook);

module.exports = router;
