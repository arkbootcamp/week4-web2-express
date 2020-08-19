
const connection = require('../configs/db')

const {actionQuery} = require('../helpers/helpers')
const books = {
  getBookById: (id) => {
    return actionQuery('SELECT * FROM books WHERE id= ?', id)
  },
  searchProduct:(search) =>{
    console.log(search)
    return actionQuery('SELECT * FROM books WHERE title LIKE ?',`%${search}%`)
  },
  // sortProduct:(id, sort) =>{
  //   return new Promise((resolve, reject) => {
  //     connection.query('SELECT * FROM books WHERE idCategory = ? ORDER BY ?? asc', [id, sort], (err, result) => {
  //       if (!err) {
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },
  getAllbook: ({...arg}) => {
    console.log(arg)
    return actionQuery(`SELECT * FROM books ${arg.search? 'WHERE title LIKE ?': ''} ORDER BY ?? ${arg.typeSort} LIMIT ${arg.limit} OFFSET ${arg.offset}`, arg.search ? [`%${arg.search}%`, arg.sortdata]:arg.sortdata )
  },
  countbook: () => {
    return actionQuery(`SELECT count(*) AS totalData FROM books`)
  },
  updateBook: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE books SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteBook: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM books WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertBook: (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO books SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = books
