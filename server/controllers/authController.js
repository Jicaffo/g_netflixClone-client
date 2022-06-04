import "dotenv/config";
import jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs'; // No implementado directamente en register ni login en este archivo
import User from '../models/User.js';
import userController from './userController.js';

// const authUser = async (req, res) => {

//     // Usuario de ejemplo para corroborar la autentificación
//     /* "name": "usuarioNuevo2.0",
//     "email": "usuarioNuevo2.0@gmail.com",
//     "password": "123456" */
     
//     //Checking Errors
//     const errors = validationResult(req);
//     //Looking for errors
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array() })
//     }

//     const { email, password } = req.body; // TOCHECK: La contraseña debería viajar encriptada o así está bien?
   
//     try {
   
//         //Finding user by email on DB
//         // TOCHECK: Ver si conviene extraer a una función aparte userController.getUserByName (simplifcaría try-catch)
//         const user = await User.findOne({ email })
//         //console.log(user)
//         if (!user) {
//             return res.status(404).json({msg: "User doesn't exist"})
//         }

//         //Checking password on Db
//         console.log(user.password) // En la base de datos (encriptada)
//         console.log(password) // En la petición (NO encriptada)

//         const validatedPassword = await bcryptjs.compare(password, user.password)
//         console.log(validatedPassword)

//         if (!validatedPassword) {
//             return res.status(403).json({msg: 'Incorrect password'})
//         }

//         res.statusMessage="User has entered correctly"
//         res.status(202).json({ userData: user })

//     } catch (error) {
//         console.log(error)
//         res.statusMessage='Couldn't connect to DB'
//         res.status(500)
//     }
// }

const register = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      res.status(409).json({ msg: "Name, Email & Password required..." });
    } else {
      // Encriptamos el password directamente sobre el req.body para que no queden copias sin encriptar.
      req.body.password = await User.encryptPassword(req.body.password);
      
      const savedUser = await new User(req.body).save();
      //console.log(savedUser);

      //Envio de correo le paso los parámetros
      //envio.enviaMail(savedUser.email, savedUser.name, enlace);
    
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24, // = 86400 = 24hs
      });
      res.status(201).json({ 
        msg: "User created.", 
        savedUser, 
        token
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "Something went wrong... ",
      error
    });
    //console.log(error);
  }
}

const login = async (req, res) => {

    const { email, password } = req.body;

    const userFound = await User.findOne({ email });

    if(!userFound) return res.status(404).json({ msg: "Email not found." })
    
    const passwordMatch = await User.comparePassword(
      password, 
      userFound.password
    );
    
    //si el password es incorrecto, no revelo el token y por consola aviso que la pass esta incorrecta.
    if(!passwordMatch) return res.status(401).json({ msg: "Invalid Password.", token: null}); 

    //console.log(userFound);
    const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
    });

    res.status(200).json({ msg: "User logged in.", token });
}

const authController = { 
    //authUser, // Versión inicial.
    register,
    login
}

export default authController;