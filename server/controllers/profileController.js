
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

    //Validación
    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty()

    if(hasErrors) {
        return res.status(400).json({errors: errors.array()})
    }
    
    try {
        // Obtener usuario
        const user = await User.findById({"_id":req.params.userId})

        try {
            const matchParamUserId = (profile) => profile._id.toString() === req.params.profileId
            
            // Obtenemos el perfil con el id pasado por parámetro del array de profiles.
            const profileToPatch = user.profiles.find(matchParamUserId)

            // Si no existe devolvemos un error
            if(profileToPatch === undefined) {
                return res.status(404).send("The profile doesn't exist")
            }

            // Obtenemos el index original donde estaba el perfil a modificar
            const profileOriginalIndex = user.profiles.findIndex(matchParamUserId)

            // Obtenemos los datos del perfil ingresado por la petición
            const newProfile = req.body

            // Modificamos el perfil original: Copiamos los valores de las propiedades ingresadas en la petición al perfil original
            for (const property in newProfile) {
                //console.log(typeof property) // A revisar (Juani)
                profileToPatch[property] = newProfile[property]
            }
            
            // Reemplazamos la versión modificada del perfil en el array original
            user.profiles.splice(profileOriginalIndex, 1, profileToPatch)

            // Actualizamos el usuario en la DB
            await user.save() 

            return res.status(204).json({ msg: 'Profile has been updated correctly.'}) // Por el momento no se envía mensaje
        } catch (error){
            console.log(error)
            res.status(400).send("Couldn't patch the profile.")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send("User doesn't exist.")
    }
}

const deleteProfile = async(req,res) => {

    //Validación
    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty()

    if(hasErrors) {
        return res.status(400).json({errors: errors.array()})
    }
    
    try {
        // Obtener usuario
        const user = await User.findById({"_id":req.params.userId})

        try {
            const matchParamUserId = (profile) => profile._id.toString() == req.params.profileId
            const notMatchParamUserId = (profile) => profile._id.toString() !== req.params.profileId
            
            // Obtenemos el perfil a modificar.
            const profileToPatch = user.profiles.find(matchParamUserId)

            // Si no existe devolvemos un error
            if(profileToPatch === undefined) {
                return res.status(404).send("The profile you are trying to delete doesn't exist")
            }

            // Reemplazamos el array original por uno filtrado que no contenga el perfil indicado 
            user.profiles = user.profiles.filter(notMatchParamUserId)

            // Actualizamos el usuario en la DB
            await user.save() 

            return res.status(204).json({ msg: 'Profile has been updated correctly.'}) // Por el momento no se envía mensaje
        } catch (error){
            console.log(error)
            res.status(400).send("Couldn't delete the profile.")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send("User doesn't exist.")
    }
}

 
const profileController = { postProfile, getProfile, getAllProfiles, patchProfile, deleteProfile }

export default profileController;