import { validationResult } from 'express-validator';
import User from '../models/User.js';
import mediaController from './mediaController.js';

// Manejo de perfiles
const getAllProfiles = async(req, res) => {
       
    try {
        const user = await User.findById({"_id":req.userId})
        const userProfiles = user.profiles;
        res.status(200).json({msg: 'Profiles retrieved OK', userProfiles })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Internal server error', error})
    }
}

const getProfile = async(req, res) => {
    try {
        const user = await User.findById({"_id":req.userId})
        const profile = user.profiles.find((profile) => profile._id.toString() === req.params.profileId)
        if(profile === undefined) {
            return res.status(404).json({msg: "The profile doesn't exist"})
        }
        res.status(200).json({msg: "Profile retrieved ok", profile})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Internal server error', error})
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
        // Busca el usuario por id
        const user = await User.findById({"_id":req.userId})
        
        // filtra el perfil de usuario por el nombre
        //const profile = user.profiles.find((profile) => profile._id.toString() === profileId)
        const profileExist = user.profiles.find((profile) => profile.name === name)
        console.log("profileExist", profileExist)
        try {
            if(profileExist) {
                return res.status(400).json({ msg: 'This profile already exist.', profileExist})
            } 
            //console.log("Este es el contenido de profile",req.body)
            user.profiles.push(req.body)
            await user.save()
            return res.status(201).json({ msg: 'Profile has been created correctly.'})
        } catch (error){
            console.log(error)
            res.status(404).json({msg: "User doesn't exist."})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Internal server error', error})
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
        const user = await User.findById({"_id":req.userId})

        try {
            const matchParamUserId = (profile) => profile._id.toString() === req.params.profileId
            
            // Obtenemos el perfil con el id pasado por parámetro del array de profiles.
            const profileToPatch = user.profiles.find(matchParamUserId)

            // Si no existe devolvemos un error
            if(profileToPatch === undefined) {
                return res.status(404).json({msg: "The profile doesn't exist"})
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

            return res.status(201).json({ msg: 'Profile has been updated correctly.'})
        } catch (error){
            console.log(error)
            res.status(400).send("Couldn't patch the profile.")
        }
    } catch (error) {
        console.log(error)
        res.status(404).send("User doesn't exist.")
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
        const user = await User.findById({"_id":req.userId})

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

            return res.status(200).json({ msg: 'Profile has been deleted correctly.'}) // Por el momento no se envía mensaje
        } catch (error){
            console.log(error)
            res.status(400).send("Couldn't delete the profile.")
        }
    } catch (error) {
        console.log(error)
        res.status(404).send("User doesn't exist.")
    }
}

// Manejo de listas

const getAllLists = async(req, res) => {
       
    const userId = req.userId
    const profileId = req.params.profileId

    try {
        const user = await User.findById({"_id":userId})
        const profile = user.profiles.find((profile) => profile._id.toString() === profileId)

        if(profile === undefined) {
            return res.status(404).send("The profile doesn't exist", profile)
        }
        const list = profile.lists
        res.status(200).json({msg: "Lists retrieved OK", list})
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Internal server error', error})
    }
}

const getOneList = async(req, res) => {
    
    const userId = req.userId
    const profileId = req.params.profileId
    const listName = req.params.listName

    try {
        const user = await User.findById(userId)
        const profile = user.profiles.find((profile) => profile._id.toString() === profileId)
        const matchProfileId = (profile) => profile._id.toString() === profileId
        const matchListName = (list) => list.name.toString() === listName

        if(profile === undefined) {
            return res.status(400).json({msg: "The profile doesn't exist"})
        }

        const profileOriginalIndex = user.profiles.findIndex(matchProfileId)
        // Te da el número de posición, y sino existe, devuelve -1
        let listIndex = user.profiles[profileOriginalIndex].lists.findIndex(matchListName)

        //console.log(profile.lists[listIndex]); // Hasta acá llega ok
        res.send(profile.lists[listIndex])
        return profile.lists[listIndex];
        
    } catch (error) {
        console.log(error)
        res.status(404).json({msg: "Element not found", error})
    }
}

const getAllMediaFromList = async(req, res) => {
      
    const userId = req.userId
    const profileId = req.params.profileId
    const listName = req.params.listName

    try {
        const user = await User.findById(userId)
        const profile = user.profiles.find((profile) => profile._id.toString() === profileId)
        const matchProfileId = (profile) => profile._id.toString() === profileId
        const matchListName = (list) => list.name.toString() === listName

        if(profile === undefined) {
            return res.status(404).json({msg: "The profile doesn't exist"})
        }

        const profileOriginalIndex = user.profiles.findIndex(matchProfileId)
        // Te da el número de posición, y sino existe, devuelve -1
        let listIndex = user.profiles[profileOriginalIndex].lists.findIndex(matchListName)

        // Obtenemos la lista de ids de los recursos multimedia
        const mediaIdArray = profile.lists[listIndex].items
        
        // Obtenemos el listado de objetos completos de los recursos multimedia a partir de los Ids (Es necesario utilizar el Promise.all() para que el map funcione correctamente) 
        const mediaList = await Promise.all( mediaIdArray.map( async (mediaId, index, mediaIdArray) => await mediaController.getOneMediaByArgumentId(mediaId)))

        res.status(200).json({msg: "Media resources retrieved OK", mediaList})
        
    } catch (error) {
        console.log(error)
        res.status(404).json({msg: 'Element not found', error})
    }

    // // No se puede devolver más de un response por cada request
    //const list = await getOneList(req, res)
    //console.log(list.items);
    //const results = list.items.map((item) => mediaController.getOneMediaById(item)) //No funciona, ID no llega por argumento sino por url
    //console.log(await mediaController.getOneMediaByArgumentId(list.items[0])); // Funcionaría pero sólo si hacemos return sin enviar respuesta.
    // const results = list.items.map( async (itemID) => {
    //     //console.log(req)
    //     return await mediaController.getOneMediaByArgumentId(req, res, itemID)
    // })
}

const getOneMediaFromList = async(req, res) => {

    const userId = req.userId
    const profileId = req.params.profileId
    const listName = req.params.listName
    const mediaId = req.params.mediaId

    try {
        const user = await User.findById(userId)
        const profile = user.profiles.find((profile) => profile._id.toString() === profileId)
        const matchProfileId = (profile) => profile._id.toString() === profileId
        const matchListName = (list) => list.name.toString() === listName
        const matchMediaId = (media) => media === mediaId

        if(profile === undefined) {
            return res.status(404).json({msg: "The profile doesn't exist"})
        }

        const profileOriginalIndex = user.profiles.findIndex(matchProfileId)
        // Te da el número de posición, y sino existe, devuelve -1
        let listIndex = user.profiles[profileOriginalIndex].lists.findIndex(matchListName)
        let mediaIndex = user.profiles[profileOriginalIndex].lists[listIndex].items.findIndex(matchMediaId)

        // Obtenemos el id del recurso multimedia
        const mediaItemId = profile.lists[listIndex].items[mediaIndex]
     
        // Obtenemos el objeto completo del recurso multimedia a partir del Id 
        const mediaItem = await mediaController.getOneMediaByArgumentId(mediaItemId)

        res.status(200).json({msg: "Media resource retrieved OK", mediaItem})
        
    } catch (error) {
        console.log(error)
        res.status(404).json({msg: 'Element not found', error})
    }
}

const deleteOneMediaFromList = async(req,res) => {
    const userId = req.userId
    const profileId = req.params.profileId
    const listName = req.params.listName
    const mediaId = req.params.mediaId

    try {
        const user = await User.findById(userId)
        const profile = user.profiles.find((profile) => profile._id.toString() === profileId)
        const matchProfileId = (profile) => profile._id.toString() === profileId
        const matchListName = (list) => list.name.toString() === listName
        const matchMediaId = (media) => media === mediaId
        const notMatchMediaId = (media) => media !== mediaId

        if(profile === undefined) {
            return res.status(404).json({msg: "The profile doesn't exist"})
        }

        const profileOriginalIndex = user.profiles.findIndex(matchProfileId)
        // Te da el número de posición, y sino existe, devuelve -1
        let listIndex = user.profiles[profileOriginalIndex].lists.findIndex(matchListName)
        let mediaIndex = user.profiles[profileOriginalIndex].lists[listIndex].items.findIndex(matchMediaId)

        // Obtenemos el id del recurso multimedia
        const mediaItemId = profile.lists[listIndex].items[mediaIndex]
     
        // Reemplazamos el array original por uno filtrado que no contenga el id del recurso multimedia indicado 
        user.profiles[profileOriginalIndex].lists[listIndex].items = user.profiles[profileOriginalIndex].lists[listIndex].items.filter(notMatchMediaId)

        // Actualizamos el usuario en la DB
        await user.save() 

        return res.status(200).json({ msg: `Media ${mediaId} deleted from list ${listName}`}) // Por el momento no se envía mensaje
        
    } catch (error) {
        console.log(error)
        res.status(404).json({msg: 'Element not found', error})
    }
}

const postMediaToList = async(req,res) => {

    const userId = req.userId
    const profileId = req.params.profileId
    const listName = req.params.listName
    const mediaId = req.params.mediaId

    try {
        const matchProfileId = (profile) => profile._id.toString() === profileId
        const matchListName = (list) => list.name.toString() === listName
        const user = await User.findById({"_id":userId})
        const profile = user.profiles.find(matchProfileId)
        

        if(!profile) {
            return res.status(404).json({msg: "The profile doesn't exist"})
        }

        const profileOriginalIndex = user.profiles.findIndex(matchProfileId)
        // Te da el número de posición, y sino existe, devuelve -1
        let listOriginalIndex = user.profiles[profileOriginalIndex].lists.findIndex(matchListName)

        // si no existe la lista, la crea.
        if(listOriginalIndex === -1){
            // corrige la posición de la lista a modificar
            listOriginalIndex = user.profiles[profileOriginalIndex].lists.length
            
            user.profiles[profileOriginalIndex].lists.push({
                "name":listName,
                "items":[]
            })
        }

        // aquí agrega la película a la lista indicada
        user.profiles[profileOriginalIndex].lists[listOriginalIndex].items.push(mediaId)
        
        await user.save()
        res.statusMessage = `The media resource has been added to list ${listName}`
        return res.status(200).json({ msg: `The media resource has been added to list.`})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Internal server error', error})
    }
}

 
const profileController = { 
    postProfile, 
    getProfile, 
    getAllProfiles, 
    patchProfile, 
    deleteProfile, 
    postMediaToList, 
    getOneMediaFromList, 
    getAllMediaFromList,
    getAllLists,
    getOneList,
    deleteOneMediaFromList
}

export default profileController;