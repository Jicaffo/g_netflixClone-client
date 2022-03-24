import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

//This function will check an exist user from users collection.

//LOGIN
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

export { authUser };