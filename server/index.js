import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
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

// Agrega un middleware que loguea cada petición (para realizar pruebas en etapa de desarrollo)
app.use(morgan('dev'));


// REDIRECCIONES DE RUTAS TEMPORALES PARA PRUEBAS FRONT (HASTA INCORPORAR AUTORIZACION EN BACK)
app.route("/api/profiles")
    .get((req, res)=> res.redirect("/api/users/6242683c65e59ca79bfe5705/profiles"))
    .post((req, res)=> res.redirect("/api/users/6242683c65e59ca79bfe5705/profiles"))

app.route("/api/profiles/:profileId")
    .get((req, res)=> res.redirect("/api/users/6242683c65e59ca79bfe5705/profiles/:profileId"))
    .patch((req, res)=> res.redirect("/api/users/6242683c65e59ca79bfe5705/profiles/:profileId"))
    .delete((req, res)=> res.redirect("/api/users/6242683c65e59ca79bfe5705/profiles/:profileId"))


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


// Ruta de Películas en Netflix Original: /watch/81111324?trackId=253448517&tctx=5%2C0%...sarasa
// TODO: Unificar declaración de variables con los parametros recibidos por url en todos los controladores.
// TODO: Unificar formato de peticiones y respuestas en controladores (idealmente refactorizar en funciones).
// TODO: Revisar try-catch y si están bien implementados los if con returns de responses.
// TODO: Ver si se puede simplificar/resumir largo de las URLs.
// NEXT: authUser, getRecommendedMedia, searchBy (query parameters), validaciones,