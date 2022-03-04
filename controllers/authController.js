const User = require('../models/User')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

//LOGIN
exports.authUser = async (req, res) => {
     
    
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
        if (!user) {
            return res.status(400).json({msg: 'User doesnt exist'})
        }

        //Checking password on Db
        // console.log(user.password)
        // console.log(password)


        const rightPassword = await bcryptjs.compare(password,user.password)
        // console.log(rightPassword)
        if (!rightPassword) {
            return res.status(400).json({msg: 'Incorrect password'})
        }

        return res.status(200).json({ msg: 'user has entered correctly'})

     } catch (error) {
         console.log(error)
         res.status(500).send('Internal server error')
     }
}