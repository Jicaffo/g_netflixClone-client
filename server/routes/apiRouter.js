import express from 'express';
import { router as userRouter} from './users.js';
import { router as mediaRouter } from './media.js';
import { router as myListRouter } from './myList.js';
//import { router as recommendationRouter } from './recommendations.js';

const router = express.Router()
//Ruta base: "/api/"

// Manipulación de usuarios
router.use('/users', userRouter) // Versión anterior (CommonJS): app.use('/api/users', require('./routes/users'))

// Manipulación de recursos multimedia
router.use('/media', mediaRouter)

// Obtiene la lista de peliculas/series del usuario
//router.use('/myList', myListRouter)

// Obtiene peliculas recomendadas
// router.use('/recommendations', require('./routes/recommendations')) //ANALIZAR EL TIPO DE VERBO DEBE SER
// i need to post the document and then search and find wich movies will be almost similar for the client

export { router };