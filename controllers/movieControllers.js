const MoviesAndSeries = require('../models/MoviesAndSeries')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')


//This function will get everything from moviesAndSeries collection.

exports.getMovies = async(req,res) => {

    // console.log(req)
    // console.log(res)

    try {
        const moviesAndSeries = await MoviesAndSeries.find()
 
        res.json({moviesAndSeries})
        //console.log(moviesAndSeries)



    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}





exports.makeMovie = async(req,res) => {


    //Checking Errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() })
    }
    const { title } = req.body
    
    try {

        let Title =  await MoviesAndSeries.findOne({ title })
        if(Title) {
            return res.status(400).json({ msg: 'This movie already exist'})

        }

        Title = new MoviesAndSeries(req.body) 
 
        
        await MoviesAndSeries.save()
        return res.status(200).json({ msg: 'Movie has been created correctly'})


    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server Error')
    }
}