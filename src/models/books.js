const connection = require('../configs/db')

const books = {
    getBookById: () =>{
    },
    getAllbook: () =>{
        return new Promise((resolve, reject) =>{
            connection.query("SELECT * FROM books", (err, result) =>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    updateBook: () =>{
    },
    deleteBook: () =>{
    },
    insertBook: () =>{
    }
}

module.exports = books