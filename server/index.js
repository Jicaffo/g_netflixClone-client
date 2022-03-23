import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import path from 'path';
import { router as authRouter } from './routes/auth.js';
import { router as userRouter} from './routes/users.js';
import { router as mediaRouter } from './routes/media.js';
import { router as searchByGenreRouter } from './routes/searchByGenre.js';
import { router as searchByTypeRouter } from './routes/searchByType.js';
import { router as myListRouter } from './routes/myList.js';
import { router as profilesRouter } from './routes/profiles.js';
// TOFIX ERROR: import React from 'react' SyntaxError: Cannot use import statement outside a module
//import frontRoutes from '../client/src/Routes/Routes.js'; 

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
//console.log('directory-name 👉️', __dirname);
// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
//console.log(path.join(__dirname, '/dist', 'index.html'));

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
//app.use('/api/users', require('./routes/users')) //Versión anterior
app.use('/api/users', userRouter)

// Obtiene todas las series y peliculas
app.use('/api/media', mediaRouter)

//Obtiene todas las series o peliculas
app.use('/api/searchByType', searchByTypeRouter)

// Obtiene peliculas o series por un genero determinado
app.use('/api/search/genre', searchByGenreRouter)

// Obtiene la lista de peliculas/series del usuario
app.use('/api/myList', myListRouter)

// Obtiene la lista de perfiles del usuario
app.use('/api/profiles', profilesRouter)

// const client = app.use("/", frontRoutes);
// console.log(client)
// console.log(frontRoutes)
// app.use(client.Login)
// TODO: trae hardcodeada la URL, ver como traer dinámicamente las rutas ya creadas desde React 
// Para cualquier otra ruta trae el index.html generado por React
/* app.use('*', (req, res) => {
    console.log(path.join(__dirname, '../client/public', 'index.html'))
    //res.sendFile(path.resolve('http://localhost:3000/', 'index.html'));
    res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
    //res.sendFile('index1.html', { root: path.join(__dirname, '../public') });

    // res.file() //Con esto podemos devolver un archivo estático
}); */

// Obtiene peliculas recomendadas
// app.use('/api/recommendations', require('./routes/recommendations')) //ANALIZAR EL TIPO DE VERBO DEBE SER
// i need to post the document and then search and find wich movies will be almost similar for the client


//TODO: eliminar llaves a las respuestas JSON de todos los controladores

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})