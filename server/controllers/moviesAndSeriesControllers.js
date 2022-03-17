import MoviesAndSeries from '../models/MoviesAndSeries.js';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

//This function will get everything from moviesAndSeries collection.

// exports.getMovies = async(req,res) => {
    const getMoviesAndSeries = async (req,res) => { 

    // console.log(req)
    // console.log(res)

    try {
        const moviesAndSeries = await MoviesAndSeries.find()
 
        res.json({moviesAndSeries})
        console.log(moviesAndSeries)



    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}





const makeMovie = async (req,res) => {


    //Checking Errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() })
    }
    const { title, type, genre } = req.body
    
    try {

        let Title =  await MoviesAndSeries.findOne({ title })
        if(Title) {
            return res.status(400).json({ msg: 'This movie already exist'})

        }

        Title = new MoviesAndSeries(req.body) 
        // console.log(Title)
        
        await Title.save()
        return res.status(200).json({ msg: 'Movies has been created correctly'})      

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server Error')
    }
}

export { getMoviesAndSeries, makeMovie };