const express = require('express')
const connectDB = require('./config/db')
const app = express()
const dotenv = require('dotenv')

dotenv.config({path: '.env'});
connectDB();

app.use(express.json({ extender: true}))

const PORT = process.env.PORT || 4000;


app.use('/api/auth', require('./routes/auth'))

app.use('/api/users', require('./routes/users'))

app.use('/api/moviesAndSeries', require('./routes/moviesAndSeries'))

app.use('/api/movies', require('./routes/movies'))

app.use('/api/series', require('./routes/series'))

app.use('/api/search/genre', require('./routes/searchByGenre'))

app.listen(PORT, () =>{

    console.log(`Server running on port ${PORT}`)
})






