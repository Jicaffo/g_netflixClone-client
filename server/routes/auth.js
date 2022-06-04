import express from 'express';
import authController from '../controllers/authController.js';
import { check } from 'express-validator';

const router = express.Router()

// === Endpoint: api/auth ===

// Autentifica el usuario, validando sus datos con el servidor
/*router.post('/auth', 
     [
        check('email', 'Add a valid email').isEmail(),
        // check('password', 'The password should be 6 characters at least').isLength({min: 6}) // Tiene sentido en la validación?
     ],
    authController.authUser
);*/

router.post('/register', authController.register)

router.post('/login', authController.login)


export { router } ;