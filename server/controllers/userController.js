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

const authUser = async (req, res) => {
     
    //Checking Errors
    const errors = validationResult(req);
    //Looking for errors
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() })
    }

    const { email, password } = req.body;
   
    try {
   
        //Finding user by email on DB
       let user = await User.findOne({ email })
       //console.log(user)
       if (!user) {
           return res.status(400).json({msg: "User doesn't exist"})
       }

       //Checking password on Db
       // console.log(user.password)
       // console.log(password)


       const rightPassword = await bcryptjs.compare(password,user.password)
       // console.log(rightPassword)
       if (!rightPassword) {
           return res.status(400).json({msg: 'Incorrect password'})
       }

       // TODO: Asegurarse que la info llegue correctamente (ver si conviene que llame a userController)
   return res.status(201).json({ msg: 'user has entered correctly'/*, userData: user*/ })

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

const { postProfile, getProfile, getAllProfiles, patchProfile} = profileController
const userController = { getAllUsers, getUser, postUser, authUser, postProfile, getProfile, getAllProfiles,patchProfile}


export default userController;