
import { validationResult } from 'express-validator';
import Profile from '../models/Profile.js';

const getAllProfiles = async(req, res) => {
       
    try {
        const profiles = await Profile.find()
        res.json({profiles})
        
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal server error')
        }
}

const getProfile = async(req, res) => {


    try {
        const profile = await Profile.findById(req.params.id)
        res.json(profile)
        
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal server error')
        }
}

const postProfile = async(req,res) => {

    //Checking Errors
    // TOFIX: Empty object errors not working
    // TODO: Make the validations and errors
    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty()

    if(hasErrors) {
        return res.status(400).json({errors: errors.array() })
    }
    const { _id, name, img, language } = req.body
    
    try {

        let profile =  await Profile.findById(_id)
        if(profile) {
            return res.status(400).json({ msg: 'This profile already exist'})

        }

        profile = new Profile(req.body) 
        console.log(profile)
        
        await profile.save()
        return res.status(200).json({ msg: 'Profile has been created correctly'})      

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server Error')
    }
}


    
    

export { postProfile, getProfile, getAllProfiles };