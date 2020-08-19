const express = require('express')
const routerBooks = require('./books')
const routerUsers = require('./users')
const routerHistory = require('./history')

const router = express.Router()

router
  .use('/books', routerBooks)
  .use('/users',routerUsers)
// .use('/hostory', routerHistory)

module.exports = router
