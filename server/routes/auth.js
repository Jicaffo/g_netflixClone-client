import express from 'express';
import { check } from 'express-validator';
import * as authController from '../controllers/authController.js';

const router = express.Router()

//User authentication 
//Endpoint: api/auth
router.use(express.json());
router.post('/', 
    // [
    //     check('email', 'Add a valid email').isEmail(),
    //     check('password', 'The password should be 6 characters at least').isLength({min: 6})
    // ],authController.authUser  
    authController.authUser
);

router.get('/', function (req, res) {
    res.send('hello world')
  })

export { router };