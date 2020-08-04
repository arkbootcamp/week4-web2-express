const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const booksRoutes = require('./src/routes/books')

// use module
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// make router
app.use('/books', booksRoutes);
// app.use('/users', usersController)


const PORT = 4000
app.listen(PORT, ()=>{console.log(`server is running ${PORT}`)})