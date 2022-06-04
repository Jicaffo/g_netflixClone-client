import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import User from '../models/User.js';
import profileController from "./profileController.js"

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()    
        res.status(200).json({ msg: "Users retrieved", allUsers });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong...", error });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({data: user})
        
        } catch (error) {
            console.log(error)
            res.status(404).json({msg: 'User not found', error})
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
        return res.status(201).json({ msg: 'User has been created correctly', user})


    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "Something went wrong...", error });
    }

}

const patchUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate( req.params.id, req.body, { new: true } );

        res.status(200).json({ msg: "User updated", updatedUser });

    } catch (error) {

        res.status(400).json({ msg: "Something went wrong...", error });
    }
}

const deleteUser = async (req, res) => {
    try {

        const deletedUser = await User.findByIdAndRemove(req.params.id);
        if(!deletedUser) return res.status(404).json({ msg: "User Not Found"});
        
        res.status(200).json({ msg: "User deleted", deletedUser });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong...", error });
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