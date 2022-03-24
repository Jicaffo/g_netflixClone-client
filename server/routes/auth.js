import express from 'express';
import { check } from 'express-validator';
import * as authController from '../controllers/authController.js';

const router = express.Router()

//TODO: evaluar si necesitamos crear un get para obtener los usuarios existentes o para crear uno nuevo.

//User authentication 
//Endpoint: api/auth

router.post('/', 
     [
         check('email', 'Add a valid email').isEmail(),
         check('password', 'The password should be 6 characters at least').isLength({min: 6})
     ],
    authController.authUser
);

export { router };