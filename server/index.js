import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import path from 'path';
import { router as apiRouter } from './routes/apiRouter.js';
// TOFIX: ERROR: import React from 'react' SyntaxError: Cannot use import statement outside a module
//import frontRoutes from '../client/src/Routes/Routes.js'; 
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); // Creamos la variable __dirname a partir de path ya que no está disponible desde módulos ES6. 

const app = express()

// Configuración a la Base de datos
dotenv.config({path: '.env'});
connectDB();

// Establece comunicación cliente/servidor en formato JSON
app.use(express.json({ extender: true}))

// Setea la variable de entorno como prioridad
const PORT = process.env.PORT || 4000;

app.use('/api', apiRouter)

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

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})

// TODO: eliminar llaves a las respuestas JSON de todos los controladores?
// TODO: Refactorizar endpoint profiles para que sea un array de objetos dentro de users y myList para que sea parte de profile?
// Ej: GET/POST /users/:userid/profiles/:profileid/myList   //  DELETE /users/:userid/profiles/:profileid/myList/:mediaid