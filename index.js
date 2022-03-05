const express = require('express')
const connectDB = require('./config/db')
const app = express()
const dotenv = require('dotenv')

dotenv.config({path: '.env'});
connectDB();

app.use(express.json({ extender: true}))

const PORT = process.env.PORT || 4000;

// Autentificación (Login)
app.use('/api/auth', require('./routes/auth'))

// Creación de un nuevo usuario
app.use('/api/users', require('./routes/users'))

// Obtiene todas las series y peliculas
app.use('/api/moviesAndSeries', require('./routes/moviesAndSeries'))

// Obtiene todas las peliculas
app.use('/api/movies', require('./routes/movies'))

// Obtiene todas las series
app.use('/api/series', require('./routes/series'))

// Obtiene peliculas o series por un genero determinado
app.use('/api/search/genre', require('./routes/searchByGenre'))

app.listen(PORT, () =>{

    console.log(`Server running on port ${PORT}`)
})






