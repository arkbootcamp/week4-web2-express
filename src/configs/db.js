const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'eno',
    password: "Qwer1234#",
    database: 'library'
})

module.exports = connection