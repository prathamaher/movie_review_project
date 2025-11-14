const express = require('express')

const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()

router.post('/share',  (req, res) => {

      const {review_id, user_id} = req.body;
   const sql = 'INSERT INTO shares(user_id, review_id) VALUES(?,?)'
    pool.query(sql, [user_id, review_id], (error, data) => {
        res.send(result.createResult(error, data))
});
});

router.get('/shared-with-me', (req, res) => {
   const sql =  'SELECT r.* FROM reviews r JOIN shares s ON r.id=s.review_id WHERE s.user_id=?'
    pool.query(sql, [req.user.id], (error, data) => {
        res.send(result.createResult(error, data))
});
});

module.exports = router;