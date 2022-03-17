import express from 'express';
import * as userController from '../controllers/userController.js';
import { check } from 'express-validator';

const router = express.Router()

// Create new User
//Endpoint: api/users

router.post('/', 
    [
        check('name', 'The name is obligatory').not().isEmpty(),
        check('email', 'Add a valid email').isEmail(),
        check('password', 'The password should be 6 characters at least').isLength({min: 6})
    ],
    userController.makeUser

);
export { router }