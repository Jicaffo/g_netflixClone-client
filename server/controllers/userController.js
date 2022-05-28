import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import profileController from "./profileController.js"
//This function will create a new user from users collection.

const getAllUsers = async (req, res) => {
    // Implementación básica
    const allUsers = await User.find()
    res.json({allUsers})
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json({user})
        
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal server error')
        }
}

const postUser = async(req,res) => {

    //Checking Errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() })
    }
    const { email, password } = req.body
    
    try {

        let user =  await User.findOne({ email })
        if(user) {
            return res.status(400).json({ msg: 'This user already exist'})

        }

        user = new User(req.body) 

        
         //This command will hash the password and if some password are the same, the hash will be diferent


         const salt = await bcryptjs.genSaltSync(10)
         console.log(salt)
         user.password = await bcryptjs.hash(password, salt)
 
        
        await user.save()
        return res.status(200).json({ msg: 'User has been created correctly'})


    } catch (error) {
        console.log(error)
        res.status(500).send('Something wrong')
    }
}

const userController = { 
    ...profileController,
    getAllUsers, 
    getUser, 
    postUser
}


export default userController;