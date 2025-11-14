const express = require('express')

const fs = require('fs')

const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()


router.post('/add', (req, res) => {
    const { title, release} = req.body
    
    const sql = "INSERT INTO movies(title,`release`) VALUES (?,?)"
    pool.query(sql, [title, release], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/all', (req, res) => {
    const sql = `SELECT * FROM movies`
    pool.query(sql, (error, data) => res.send(result.createResult(error, data)))
})

module.exports = router