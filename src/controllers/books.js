const booksModels = require('../models/books')
const hellper = require('../helpers/helpers')
const redis = require('redis')
const client = redis.createClient(6379);
const books = {
  getBookById: (req, res) => {
    const id = req.params.id
    booksModels.getBookById(id)
      .then((result) => {
        resultBooks = result
        // res.json(resultBooks);
        hellper.renponse(res, reinsultBooks, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllbook: (req, res) => {
    const sortdata = req.query.sort || 'id';
    const typeSort = req.query.typesort || 'ASC' 
    const search = req.query.search
    const limit = req.query.limit || 9
    const offset = ((req.query.page || 1) -1) * limit
    booksModels.getAllbook({sortdata,typeSort, search, limit, offset})
    .then((result) => {
      resultBooks = result

      // res.json(resultBooks);
      client.setex('getallproduct', 60*60*12 , JSON.stringify(resultBooks))
      hellper.renponse(res, resultBooks, 200, null, req.paginations)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  updateBook: (req, res) => {
    console.log(req.file)
    const id = req.params.idtes
    const { title, description, idCategory, author } = req.body
    const data = {
      title,
      description,
      idCategory,
      author,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    if(req.file){
      data.image = `http://localhost:4017/uploads/${req.file.filename}`
    }
    // const data = {
    //   title,
    //   description,
    //   image:`http://localhost:4017/uploads/${req.file.filename}`,
    //   idCategory,
    //   author,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }
    booksModels.updateBook(id, data)
      .then((result) => {
        const resultBooks = result
        console.log(result)
        hellper.renponse(res, resultBooks, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteBook: (req, res) => {
    const id = req.params.id
    booksModels.deleteBook(id)
      .then((result) => {
        resultBooks = result
        res.json(resultBooks)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertBook: (req, res) => {
    // const title = req.body.title
    // const description = req.body.description
    const { title, description, status, idCategory, author } = req.body
    const data = {
      title,
      description,
      image: `http://localhost:4017/uploads/${req.file.filename}`,
      status: 1,
      idCategory,
      author,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    booksModels.insertBook(data)
      .then((result) => {
        const resultBooks = result
        res.json(resultBooks)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = books
