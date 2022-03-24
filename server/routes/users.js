//const express = require('express') // Version anterior
import express from 'express';
import userController from '../controllers/userController.js';
import { check } from 'express-validator';

const router = express.Router()

//Endpoint: api/users

// Get one User
router.get('/',
    userController.getAllUsers
);

// Get one User
router.get('/:id',
    userController.getUser
);

// Create new User
router.post('/', 
    // [
    //     check('name', 'The name is obligatory').not().isEmpty(),
    //     check('email', 'Add a valid email').isEmail(),
    //     check('password', 'The password should be 6 characters at least').isLength({min: 6})
    // ],
    userController.postUser

);

export { router }