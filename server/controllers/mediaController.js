import { validationResult } from 'express-validator';
import Media from '../models/Media.js';

// Obtiene todos los recursos multimedia.
const getAllMedia = async (req,res) => { 

    // console.log(req)
    // console.log(res)

    try {
        const mediaList = await Media.find(/* {"genre": "accion"}, {"myList": "true"} */)
         
        res.json(mediaList)
        //console.log(moviesAndSeries)



    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

const getOneMediaById = async (req,res) => { 

    const id = req.params.id

    try {
        const media = await Media.findById(id)
 
        res.json(media)

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

const getOneMediaByArgumentId = async (id) => { 

    try {
        const media = await Media.findById(id)
        //res.json(media)
        return media

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

// Interactuar con un recurso multimedia particular
const postMedia = async (req,res) => {


    //Checking Errors
    // TOFIX: Empty object errors not working
    // TODO: Make the validations and errors
    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty()
    console.log("errors: ", errors)
    console.log("hasErrors: ", hasErrors)
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
        console.log(media)
        
        await media.save()
        return res.status(201).json({ msg: 'The new media was created correctly'})      

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server Error')
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
            return res.status(400).json({ msg: "This id doesn't exist"})
        }
        await Media.findByIdAndDelete(id);
        return res.status(200).json({ msg: `Media with ID '${id}' has been deleted`})      

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server Error')
    }
}

// Obtiene recursos filtrados
const getMediaByType = async (req, res) => {
    
    try {

        const filteredList = await Media.find({type: req.params.type}) // {type: "serie"
        console.log(filteredList)
        res.status(200)
        res.statusMessage="Filtered media list obtained correctly"
        res.json({filteredList})

        //Ver de retornar un array con strings para que no se rompa el front
    
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

const getMediaByGenre = async (req,res) => {

    // {
    //     "genre": "drama",
    //     "type": "serie"
    // }
    //const { genre, type } = req.body

    try {

        const filteredList = await Media.find({ genre: req.params.genre })
        console.log(res)
        res.status(200)
        res.statusMessage="Filtered media list obtained correctly"
        res.json({filteredList})

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

//This function will get everything from moviesAndSeries collection.
const getRecommendedMedia = async(req,res) => {

    const { genre, type, audienceClasification, director } = req.body

    try {

        const recommend = await Media.aggregate ({
            $project: { highmarks: { $filter: { input: "$marks", as: "marks", cond: { $gt: [ "$$marks", 10 ] } } } } 
        
        } )
       
        // console.log(genre)
        // console.log(type)
        // const moviesByGenre = await MoviesAndSeries.find({
        //     type,
        //     genre
        // })
 
         res.json({'right': 'okay'})

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

const mediaController = { getAllMedia, getOneMediaById, getOneMediaByArgumentId, postMedia, deleteMedia, getMediaByType, getMediaByGenre, getRecommendedMedia }

export default mediaController;