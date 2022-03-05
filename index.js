const express = require('express')
const connectDB = require('./config/db')
const app = express()
const dotenv = require('dotenv')

dotenv.config({path: '.env'});
connectDB();

app.use(express.json({ extender: true}))

const PORT = process.env.PORT || 4000;

//Login
app.use('/api/auth', require('./routes/auth'))

//Register
app.use('/api/users', require('./routes/users'))

//Get all movies and series
app.use('/api/moviesAndSeries', require('./routes/moviesAndSeries'))

//Get By type
app.use('/api/searchByType', require('./routes/searchByType'))

//Get by Genre
app.use('/api/search/genre', require('./routes/searchByGenre'))


app.use('/api/recommendations', require('./routes/recommendations'))

app.listen(PORT, () =>{

    console.log(`Server running on port ${PORT}`)
})

//i need to post the document and then search and find wich movies will be almost similar for the client




