import { validationResult } from 'express-validator';
import Media from '../models/Media.js';

// Obtiene todos los recursos multimedia (o una versión filtrada por req.query).
const getMedia = async (req,res) => { 
    try {
        const mediaList = await Media.find(req.query)
         
        res.status(200).json({msg: "Media resources retrieved correctly.", mediaList})

    } catch (error) {
        console.log(error)
        res.status(400).json({msg: 'Something went wrong...', error})
    }
}

const getOneMediaById = async (req,res) => { 

    const id = req.params.id

    try {
        const media = await Media.findById(id)
 
        res.status(200).json({media})

    } catch (error) {
        console.log(error)
        res.status(404).json({msg: 'Not found', error})
    }
}

const getOneMediaByArgumentId = async (id) => { 

    try {
        const media = await Media.findById(id)
        //res.json(media)
        return media

    } catch (error) {
        console.log(error)
        res.status(404).json({msg: 'Not found', error})
    }
}

// Interactuar con un recurso multimedia particular
const postMedia = async (req,res) => {
    // Para carga rápida automatizada, // TODO: a mejorar lógica con permisos de admin
    if (req.query.array == "true") {
        req.body.forEach(async (media) => {
            await new Media(media).save() 
        })
        return res.status(201).json({ msg: 'Multiple media resources created correctly' })  
    }

    //Checking Errors
    // TOFIX: Empty object errors not working
    // TODO: Make the validations and errors
    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty()
    //console.log("errors: ", errors)
    //console.log("hasErrors: ", hasErrors)
    if(hasErrors) {
        return res.status(400).json({errors: errors.array() })
    }
    const { title, type, genre } = req.body
    
    try {

        let media =  await Media.findOne({ title })
        if(media) {
            return res.status(400).json({ msg: 'This media already exist'})

        }

        media = new Media(req.body) 
        //console.log(media)
        
        await media.save()
        return res.status(201).json({ msg: 'The new media was created correctly'})      

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Internal server error', error})
    }
}

const deleteMedia = async (req, res) => {
    const id = req.params.id;
    //Checking Errors
    // TOFIX: Empty object errors not working
    // TODO: Make the validations and errors
    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty()
    if(hasErrors) {
        return res.status(400).json({errors: errors.array() })
    }
    
    try {

        // El ID debe tener la misma cantidad de caracteres que trae por defecto (24 caracteres)
        let media =  await Media.findById(id)
        if(!media) {
            return res.status(404).json({ msg: "This id doesn't exist"})
        }
        await Media.findByIdAndDelete(id);
        return res.status(200).json({ msg: `Media with ID '${id}' has been deleted`})      

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Internal server error', error})
    }
}

// //This function will get everything from moviesAndSeries collection.
// const getRecommendedMedia = async(req,res) => {

//     const { genre, type, audienceClasification, director } = req.body

//     try {

//         const recommend = await Media.aggregate ({
//             $project: { highmarks: { $filter: { input: "$marks", as: "marks", cond: { $gt: [ "$$marks", 10 ] } } } } 
        
//         } )
       
//         // console.log(genre)
//         // console.log(type)
//         // const moviesByGenre = await MoviesAndSeries.find({
//         //     type,
//         //     genre
//         // })
 
//          res.status(200).json({msg: "right, okey"})

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({msg: 'Internal server error', data: error})
//     }
// }

const mediaController = { 
    getMedia, 
    getOneMediaById, 
    getOneMediaByArgumentId, 
    postMedia, 
    deleteMedia, 
    //getRecommendedMedia,
}

export default mediaController;
