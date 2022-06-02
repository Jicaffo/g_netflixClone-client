import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import { router as apiRouter } from './routes/apiRouter.js';
// TOFIX: ERROR: import React from 'react' SyntaxError: Cannot use import statement outside a module
//import frontRoutes from '../client/src/Routes/Routes.js'; 
import {fileURLToPath} from 'url';

const app = express()

// Configuración a la Base de datos
dotenv.config({path: '.env'});
connectDB();

// Settings
// Setea la variable de entorno como prioridad
const PORT = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); // Creamos la variable __dirname a partir de path ya que no está disponible desde módulos ES6. 
app.set("port", PORT);
const corsOptions = {}

// Configura CORS abierto para habilitar acceso desde cualquier URL
app.use(cors());

// Establece comunicación cliente/servidor en formato JSON
app.use(express.json({ extender: true}))

// Agrega un middleware que loguea cada petición (para realizar pruebas en etapa de desarrollo)
app.use(morgan('dev'));

// Rutas
app.use('/api', apiRouter)
//app.use('/api/v2', apiRouterV2) // Si hubiera más versiones

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

app.listen(app.get("port"), () =>{
    console.log(`Server running on port ${app.get("port")}`)
})


// Ruta de Películas en Netflix Original: /watch/81111324?trackId=253448517&tctx=5%2C0%...sarasa
// NTH: Unificar declaración de variables en la parte superior de todos los controladores con los parametros recibidos por url.
// NTH: Unificar formato de peticiones (idealmente refactorizar en funciones).
// NTH: Revisar try-catch y si están bien implementados los if con returns de responses.
// NTH: getRecommendedMedia, searchBy (query parameters), validaciones,
// NTH: unificar uso de bcryptjs (userController y authController) / bcrypt (último, implementado en models/User) y desinstalar el otro.
// NTH: Deberíamos poder revocar los permisos del JWT ante logout o eliminar usuario para que no pueda acceder más. blacklist?

// TODO: Simplificar URLs. Queda ver de Lists en adelante
// TODO: Repasar y definir modelos User / Profile / List entre front y back
// TODO: Definir estructura de respuestas: msg + data? 1 (objeto y array de objetos), 204->200 + msj?