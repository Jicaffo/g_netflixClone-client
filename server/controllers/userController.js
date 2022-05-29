import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import User from '../models/User.js';
import profileController from "./profileController.js"

const getAllUsers = async (req, res) => {
    // Implementación básica
    const allUsers = await User.find()
    res.json({allUsers})
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({data: user})
        
        } catch (error) {
            console.log(error)
            res.status(404).json({msg: 'User not found', data: error})
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
        return res.status(201).json({ msg: 'User has been created correctly'})


    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "Something went wrong...", data: error });
    }

}

const patchUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate( req.params.id, req.body, { new: true } );

        res.status(200).json({ msg: "User updated", data: updatedUser });

    } catch (error) {

        res.status(400).json({ msg: "Something went wrong...", data: error });
    }
}

const deleteUser = async (req, res) => {
    try {

        const deletedUser = await User.findByIdAndRemove(req.params.id);

        res.status(200).json({ msg: "User deleted", data: deletedUser });

    } catch (error) {

        res.status(400).json({ msg: "Something went wrong...", data: error });

    }
}

const userController = { 
    ...profileController,
    getAllUsers, 
    getUser, 
    postUser,
    patchUser,
    deleteUser
}


export default userController;