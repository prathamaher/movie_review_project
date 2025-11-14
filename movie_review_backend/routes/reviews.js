const express = require('express')

const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()

router.post('/create',  (req, res) => {
  const { movie_id, review, rating } = req.body;
   const sql = 'INSERT INTO reviews(movie_id,review,rating,user_id) VALUES(?,?,?,?)'
    pool.query(sql, [movie_id, review, rating, req.user.id], (error, data) => {
        res.send(result.createResult(error, data))
});
})

router.put('/edit/:id',  (req, res) => {

    const { review, rating } = req.body;
   const sql = 'UPDATE reviews SET review=?, rating=? WHERE id=? AND user_id=?'
    pool.query(sql, [review, rating, req.params.id, req.user.id], (error, data) => {
        res.send(result.createResult(error, data))
});

})

router.delete('/delete/:id',  async (req, res) => {
   const sql = 'DELETE FROM reviews WHERE id=? AND user_id=?'
    pool.query(sql, [req.params.id, req.user.id], (error, data) => {
        res.send(result.createResult(error, data))
});
});

router.get('/all',  (req, res) => {
  const [rows] = pool.query(
    'SELECT r.*, u.first_name, u.last_name, m.title FROM reviews r JOIN users u ON r.user_id=u.id JOIN movies m ON r.movie_id=m.id'
  );
  res.json(rows);
});

router.get('/my', (req, res) => {
  const [rows] =  pool.query('SELECT * FROM reviews WHERE user_id=?', [req.user.id]);
  res.json(rows);
});

module.exports = router;