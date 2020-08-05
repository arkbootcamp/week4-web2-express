const booksModels = require('../models/books')
const hellper = require('../helpers/helpers')

const books = {
    getBookById: (req, res) =>{
        const id = req.params.id;
        booksModels.getBookById(id)
        .then((result)=>{
            resultBooks = result;
            // res.json(resultBooks);
            hellper.renponse(res, resultBooks, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    getAllbook: (req, res) =>{
        booksModels.getAllbook()
        .then((result)=>{
            resultBooks = result;
            // res.json(resultBooks);
            hellper.renponse(res, resultBooks, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateBook: (req, res) =>{
        const id = req.params.idtes
        const {title, description, image, status, idCategory, author} = req.body
        const data = {
            title,
            description,
            image,
            status,
            idCategory,
            author,
            createdAt: new Date(),
            updatedAt:new Date()
        }
        booksModels.updateBook(id, data)
        .then((result)=>{
            const resultBooks = result;
            console.log(result)
            res.json(resultBooks)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    deleteBook: (req, res) =>{
        const id = req.params.id
        booksModels.deleteBook(id)
        .then((result)=>{
            resultBooks = result;
            res.json(resultBooks);
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    insertBook: (req, res) =>{
        // const title = req.body.title
        // const description = req.body.description
        const {title, description, image, status, idCategory, author} = req.body
        const data = {
            title,
            description,
            image,
            status,
            idCategory,
            author,
            createdAt: new Date(),
            updatedAt:new Date()
        }
        booksModels.insertBook(data)
        .then((result)=>{
            const resultBooks = result;
            console.log(result)
            res.json(resultBooks)
        })
        .catch((err)=>{
            console.log(err)
        })

    }
}

module.exports = books