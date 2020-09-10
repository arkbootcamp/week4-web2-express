const express = require('express')
const booksController = require('../controllers/books')
const router = express.Router()
const paginationBook = require('../middlewares/paginations').books
const {verifyAccess} = require('../middlewares/auth')
const multer = require('../middlewares/multer')
const redis = require('../middlewares/redis')

router
  .get('/:id',verifyAccess, booksController.getBookById)
  .get('/',verifyAccess, paginationBook, booksController.getAllbook)
  .post('/', verifyAccess, multer.upload.single('image'), booksController.insertBook)
  .patch('/:idtes', multer.upload.single('image'), booksController.updateBook)
  .delete('/:id',verifyAccess, booksController.deleteBook)

module.exports = router
