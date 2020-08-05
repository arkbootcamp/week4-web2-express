const express = require('express');
const routerBooks = require('./books');
// const routerCategetory = require('./category')
const routerHistory = require('./history')


const router = express.Router();

router
    .use('/books',routerBooks)
    // .use('/category',routerCategetory)
    // .use('/hostory', routerHistory)

module.exports = router;