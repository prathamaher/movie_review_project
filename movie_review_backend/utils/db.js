const mysql = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Civilwar@19',
    database: 'movie_review_system'
})

module.exports = pool