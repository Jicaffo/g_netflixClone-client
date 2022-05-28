import User from '../models/User.js';
import bcryptjs from 'bcryptjs'; // No implementado directamente en register() en este archivo
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
//         res.statusMessage="Couldn't connect to DB"
//         res.status(500)
//     }
// }

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      if (!name || !email || !password) {
        res.status(409).json({ msg: "Todos los campos son requeridos..." });
      } else {
        const user = new User({
          name,
          email,
          password: await User.encryptPassword(password),
        });
        const newUser = await user.save();
        //res.status(201).json({ msg: "Usuario creado" });
  
        //Envio de correo ;e paso los parámetros
        //envio.enviaMail(newUser.email, newUser.name, enlace);
        
        console.log(newUser);
      
        // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        //   expiresIn: 60 * 60 * 24, // = 86400 = 24hs
        // });
        res.status(201).json({ newUser/*, token*/ });
      }
    } catch (error) {
      res.status(400).json({ msg: "Algo salió mal..." + error });
      console.log(error);
    }
}

const login = async (req, res) => {

    const { email, password } = req.body; // los datos que el usuario pasa por consola

    const userFound = await User.findOne({ email }); // busco en la DB el usuario a través del email

    if(!userFound) return res.status(400).json({ msg: "Email no encontrado." })
    
    const passwordMatch = await User.comparePassword(
      password, 
      userFound.password // llamo al método creado en el modelo User, en donde comparamos las contraseñas
      );
    
      if(!passwordMatch) return res.status(401).json({token: null, msg: "Password inválido."}); 
    //si el password es incorrecto, no revelo el token y por consola aviso que la pass esta incorrecta.

    //solo en modo DEV
    console.log(userFound);
    // const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
    //     expiresIn: 86400
    // });
    
    //res.json({ token });
    res.json({ msg: "Usuario logueado correctamente" });
}

const authController = { 
    //authUser, // Versión inicial.
    register,
    login
}

export default authController;