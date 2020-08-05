const connection = require('../configs/db')

const books = {
    getBookById: (id) =>{
        return new Promise((resolve, reject) =>{
            connection.query(`SELECT * FROM books INNER JOIN  where id = ?`, id, (err, result) =>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
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
    updateBook: (id, data) =>{
        return new Promise((resolve, reject) =>{
            connection.query("UPDATE books SET ? WHERE id = ?", [data, id], (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    deleteBook: (id) =>{
        return new Promise((resolve, reject) =>{
            connection.query("DELETE FROM books WHERE id = ?", id, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    insertBook: (data) =>{
        console.log(data)
        return new Promise((resolve, reject) =>{
            connection.query("INSERT INTO books SET ?", data, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    }
}

module.exports = books