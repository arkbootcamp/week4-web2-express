const booksModels = require('../models/books')

const books = {
    getBookById: (req, res) =>{
        const data = req.params.data;
        res.send("helo "+ data)
    },
    getAllbook: (req, res) =>{
        booksModels.getAllbook()
        .then((result)=>{
            resultBooks = result;
            res.json(resultBooks);
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateBook: (req, res) =>{
        res.send("update book")
    },
    deleteBook: (req, res) =>{
        res.send('delete books')
    },
    insertBook: (req, res) =>{
        res.send('insert books')
    }
}

module.exports = books