const express = require('express')
const booksController = require('../controllers/books')
const router = express.Router()
const paginationBook = require('../middlewares/paginations').books
const {verifyAccess} = require('../middlewares/auth')
const multer = require('../middlewares/multer')
const redis = require('../middlewares/redis')

router
  .get('/:id',verifyAccess, booksController.getBookById)
  .get('/',verifyAccess,redis.cacheGetAllBook, paginationBook, booksController.getAllbook)
  .post('/', verifyAccess, redis.clearGetAllbooks, multer.upload.single('image'), booksController.insertBook)
  .patch('/:idtes',verifyAccess, booksController.updateBook)
  .delete('/:id',verifyAccess, booksController.deleteBook)

module.exports = router
