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

    const { email, password } = req.body; // TOCHECK: La contraseña debería viajar encriptada o así está bien?
   
    try {
   
        //Finding user by email on DB
        // TOCHECK: Ver si conviene extraer a una función aparte userController.getUserByName (simplifcaría try-catch)
        const user = await User.findOne({ email })
        //console.log(user)
        if (!user) {
            return res.status(404).json({msg: "User doesn't exist"})
        }

        //Checking password on Db
        console.log(user.password) // En la base de datos (encriptada)
        console.log(password) // En la petición (NO encriptada)

        const validatedPassword = await bcryptjs.compare(password, user.password)
        console.log(validatedPassword)

        if (!validatedPassword) {
            return res.status(403).json({msg: 'Incorrect password'})
        }

        res.statusMessage="User has entered correctly"
        res.status(202).json({ userData: user })

    } catch (error) {
        console.log(error)
        res.statusMessage="Couldn't connect to DB"
        res.status(500)
    }
}



const { 
    postProfile, 
    getProfile, 
    getAllProfiles, 
    patchProfile, 
    deleteProfile, 
    postMediaToList, 
    getOneFromList, 
    getAllMediaFromList,
    getAllLists,
    deleteOneFromList
} = profileController

const userController = { 
    getAllUsers, 
    getUser, 
    postUser, 
    authUser, 
    postProfile, 
    getProfile, 
    getAllProfiles,
    patchProfile, 
    deleteProfile, 
    postMediaToList, 
    getOneFromList, 
    getAllMediaFromList,
    getAllLists,
    deleteOneFromList
}


export default userController;