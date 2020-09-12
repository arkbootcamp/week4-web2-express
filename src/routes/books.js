const express = require('express')
const booksController = require('../controllers/books')
const router = express.Router()
const paginationBook = require('../middlewares/paginations').books
const {verifyAccess} = require('../middlewares/auth')
const {upload} = require('../middlewares/multer')
const redis = require('../middlewares/redis')

router
  .get('/:id',verifyAccess, booksController.getBookById)
  .get('/',verifyAccess, paginationBook, booksController.getAllbook)
  .post('/', verifyAccess, upload.array('image', 5), booksController.insertBook)
  .patch('/:idtes', upload.array('image', 5), booksController.updateBook)
  .delete('/:id',verifyAccess, booksController.deleteBook)

module.exports = router
