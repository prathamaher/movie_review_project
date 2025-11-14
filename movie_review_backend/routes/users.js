const express = require('express')
const bcrypt = require('bcrypt')
const pool = require('../utils/db')
const config = require('../utils/config')
const result = require('../utils/result')

const router = express.Router()

// SIGNUP
router.post('/signup', async (req, res) => {
    const { first_name, last_name, email, password, mobile, birth } = req.body
    const sql = `INSERT INTO users(first_name,last_name,email,password,mobile,birth) VALUES(?,?,?,?,?,?)`

    try {
        const hashPassword = await bcrypt.hash(password, config.saltRounds)
        pool.query(sql, [first_name, last_name, email, hashPassword, mobile, birth],
            (error, data) => res.send(result.createResult(error, data))
        )
    } catch (error) {
        res.send(result.createResult(error))
    }
})

// SIGNIN
router.post('/signin', (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ?`

    pool.query(sql, [email], async (error, data) => {
        if (error) return res.send(result.createResult(error))
        if (data.length === 0) return res.send(result.createResult('Invalid Email'))

        const user = data[0]
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) return res.send(result.createResult('Invalid Password'))

        res.send(result.createResult(null, {
            id: user.id,
            first_name: user.first_name,
            email: user.email
        }))
    })
})

module.exports = router
