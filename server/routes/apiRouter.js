import express from 'express';
import { router as authRouter } from './auth.js';
import { router as userRouter} from './users.js';
import { router as mediaRouter } from './media.js';
import { router as myListRouter } from './myList.js';
import { router as profilesRouter } from './profiles.js';
//import { router as recommendationRouter } from './recommendations.js';

const router = express.Router()
//Ruta base: "/api/"

// Autentificación (Login)
//router.use('/auth', authRouter)

// Creación de un nuevo usuario
router.use('/users', userRouter) // Versión anterior (CommonJS): app.use('/api/users', require('./routes/users'))

// Obtiene todas las series y peliculas
router.use('/media', mediaRouter)

// Obtiene la lista de peliculas/series del usuario
//router.use('/myList', myListRouter)

// Obtiene la lista de perfiles del usuario
//router.use('/profiles', profilesRouter)

// Obtiene peliculas recomendadas
// router.use('/recommendations', require('./routes/recommendations')) //ANALIZAR EL TIPO DE VERBO DEBE SER
// i need to post the document and then search and find wich movies will be almost similar for the client

export { router };