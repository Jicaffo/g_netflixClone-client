import MoviesAndSeries from '../models/Media.js';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

//This function will get everything from moviesAndSeries collection.

// exports.getMovies = async(req,res) => {
const getMedia = async (req,res) => { 

    // console.log(req)
    // console.log(res)

    try {
        const moviesAndSeries = await MoviesAndSeries.find(/* {"genre": "accion"}, {"myList": "true"} */)
 
        res.json({moviesAndSeries})
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

        let Title =  await MoviesAndSeries.findOne({ title })
        if(Title) {
            return res.status(400).json({ msg: 'This movie already exist'})

        }

        Title = new MoviesAndSeries(req.body) 
        console.log(Title)
        
        await Title.save()
        return res.status(200).json({ msg: 'Movies has been created correctly'})      

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
        let media =  await MoviesAndSeries.findById(id)
        if(!media) {
            return res.status(400).json({ msg: "This id doesn't exist"})
        }
        await MoviesAndSeries.findByIdAndDelete(id);
        return res.status(200).json({ msg: `Media with ID '${id}' has been deleted`})      

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server Error')
    }
}

export { getMedia, postMedia, deleteMedia };