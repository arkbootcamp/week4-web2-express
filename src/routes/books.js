const express = require('express');
const booksController = require('../controllers/books')
const router = express.Router()

router
    .get('/:id', booksController.getBookById)
    .get('/', booksController.getAllbook)
    .post('/', booksController.insertBook)
    .patch('/:id', booksController.updateBook )
    .delete('/', booksController.deleteBook)
    
module.exports = router