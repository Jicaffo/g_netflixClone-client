import Media from '../models/Media.js';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

//This function will get everything from moviesAndSeries collection.

// exports.getMovies = async(req,res) => {
const getAllMedia = async (req,res) => { 

    // console.log(req)
    // console.log(res)

    try {
        const mediaList = await Media.find(/* {"genre": "accion"}, {"myList": "true"} */)
 
        res.json({mediaList})
        //console.log(moviesAndSeries)



    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

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

const deleteMedia = async (req, res, id) => {
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

const mediaController = { getAllMedia, postMedia, deleteMedia }

export default mediaController;