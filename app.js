require('dotenv').config()

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
// const booksRoutes = require('./src/routes/books')
// const historyRoutes = require('./src/routes/history')
const morgan = require('morgan')
const cors = require('cors');
const routes = require('./src/routes/index')
// use module
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// use morga
app.use(morgan('dev'))

// use cors
app.use(cors())


// make router
// app.use('/books', booksRoutes);
// app.use('/history', historyRoutes);
// app.use('/users', usersController)
app.use('/api/v1/', routes)
const PORT = process.env.PORT;

app.listen(PORT, ()=>{console.log(`server is running ${PORT}`)})