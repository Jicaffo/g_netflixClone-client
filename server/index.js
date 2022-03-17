import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import { router as authRouter } from './routes/auth.js';
import { router as userRouter} from './routes/users.js';
import { router as moviesAndSeriesRouter } from './routes/moviesAndSeries.js';
import { router as searchByGenreRouter } from './routes/searchByGenre.js';
import { router as searchByTypeRouter } from './routes/searchByType.js';
import { router as myListRouter } from './routes/myList.js';

const app = express()

//const frontRoutes = require('../client/src/Routes/Routes')

// Configuración a la Base de datos
dotenv.config({path: '.env'});
connectDB();

// Establece comunicación cliente/servidor en formato JSON
app.use(express.json({ extender: true}))

// Setea la variable de entorno como prioridad
const PORT = process.env.PORT || 4000;

// Autentificación (Login)
app.use('/api/auth', authRouter)

// Creación de un nuevo usuario
//app.use('/api/moviesAndSeries', require('./routes/moviesAndSeries')) //Versión anterior
app.use('/api/users', userRouter)

// Obtiene todas las series y peliculas
//app.use('/api/moviesAndSeries', require('./routes/moviesAndSeries')) //Versión anterior
app.use('/api/moviesAndSeries', moviesAndSeriesRouter)

//Obtiene todas las series o peliculas
//app.use('/api/searchByType', require('./routes/searchByType')) //Versión anterior
app.use('/api/searchByType', searchByTypeRouter)

// Obtiene peliculas o series por un genero determinado
//app.use('/api/search/genre', require('./routes/searchByGenre')) //Versión anterior
app.use('/api/search/genre', searchByGenreRouter)

// const client = app.use(frontRoutes);
// console.log(client)
// console.log(frontRoutes)
// app.use(client.Login)

// Obtiene peliculas recomendadas
// app.use('/api/recommendations', require('./routes/recommendations')) //ANALIZAR EL TIPO DE VERBO DEBE SER

// Obtiene la lista de peliculas/series del usuario
app.use('/api/myList', myListRouter)


app.listen(PORT, () =>{

    console.log(`Server running on port ${PORT}`)
})

//i need to post the document and then search and find wich movies will be almost similar for the client




