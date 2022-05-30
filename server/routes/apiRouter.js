import express from 'express';
import { router as authRouter } from './auth.js';
import { router as userRouter} from './users.js';
import { router as mediaRouter } from './media.js';
import { router as profileRouter } from './profiles.js';
import { router as testRouter } from './tests.js';
//import { router as recommendationRouter } from './recommendations.js';

const router = express.Router()
//Ruta base: "/api/"

// Manipulación de autenticación y autorización (registro y login)
router.use('/auth', authRouter) // Versión anterior (CommonJS): app.use('/api/users', require('./routes/users'))

// Manipulación de usuarios (cuentas)
router.use('/users', userRouter) // Versión anterior (CommonJS): app.use('/api/users', require('./routes/users'))

// Manipulación de perfiles y toda la información que alberga cada uno (perfiles, preferencias, listas personalizadas)
router.use('/profiles', profileRouter) // Versión anterior (CommonJS): app.use('/api/users', require('./routes/users'))

// Manipulación de recursos multimedia
router.use('/media', mediaRouter)

// Pruebas temporales
router.use('/test', testRouter)

// Obtiene peliculas recomendadas
// router.use('/recommendations', require('./routes/recommendations')) //ANALIZAR EL TIPO DE VERBO DEBE SER
// i need to post the document and then search and find wich movies will be almost similar for the client

export { router };