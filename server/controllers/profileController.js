
import { validationResult } from 'express-validator';
import User from '../models/User.js';


const getAllProfiles = async(req, res) => {
       
    try {
        const user = await User.findById({"_id":req.params.userId})
        res.json({"profiles": user.profiles})
        
        } catch (error) {
            console.log(error)
            res.status(500).send('Error de getAllProfiles')
        }
}

const getProfile = async(req, res) => {
    try {
        const user = await User.findById({"_id":req.params.userId})
        const profile = user.profiles.find((profile) => profile._id.toString() === req.params.profileId)
        if(profile === undefined) {
            return res.status(404).send("The profile doesn't exist")
        }
        res.json({profile})

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
        return res.status(400).json({errors: errors.array()})
    }
    const { _id, name, img, language, automaticReproduction, myList } = req.body // parámetros de perfiles
    
    try {
        const user = await User.findById({"_id":req.params.userId})
        //res.json({"profiles": user.profiles})
        const filterProfiles = user.profiles.filter((profile) => profile.name === name)
        try {
            if(filterProfiles.length != 0) {
                return res.status(400).json({ msg: 'This profile already exist.'})
            } 
            console.log("Este es el contenido de profile",req.body)
            user.profiles.push(req.body)
            //const profile = new user.profiles(req.body)
            await user.save()
            return res.status(204).json({ msg: 'Profile has been created correctly.'})
        } catch (error){
            console.log(error)
            res.status(400).send("User doesn't exist.")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server Error.')
    }

    // TODO: ver el formato de try y catch para manejo de errores sin anidarlos.
}

const patchProfile = async(req,res) => {

    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty()

    if(hasErrors) {
        return res.status(400).json({errors: errors.array()})
    }
    
    try {
        const user = await User.findById({"_id":req.params.userId})
        const profileToPatch = user.profiles.find((profile) => profile._id.toString() === req.params.profileId)

        try {
            if(profileToPatch === undefined) {
                return res.status(404).send("The profile doesn't exist")
            }

            const newProfile = req.body

            for (const property in newProfile) {
                //console.log(typeof property) // A revisar (Juani)
                profileToPatch[property] = newProfile[property]
            }
            console.log(profileToPatch)
            user.profiles.push(profileToPatch)
            //await user.save() 

            return res.status(204).json({ msg: 'Profile has been updated correctly.'})
        } catch (error){
            console.log(error)
            res.status(400).send("User doesn't exist.")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server Error.')
    }

    // TODO: ver el formato de try y catch para manejo de errores sin anidarlos.
}


    
const profileController = { postProfile, getProfile, getAllProfiles, patchProfile}

export default profileController;