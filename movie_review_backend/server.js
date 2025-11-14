const express = require('express')
const cors = require('cors')

const app = express()

const Movies = require('./routes/movies') ;

app.use(cors())
app.use(express.json())

// Routes
//app.use('/auth', require('./routes/auth'))
app.use('/movie',Movies )
//app.use('/review', require('./routes/reviews'))
//app.use('/share', require('./routes/shares'))

app.listen(5000, () => console.log("SERVER RUNNING ON 5000"))
