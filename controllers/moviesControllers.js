const MoviesAndSeries = require('../models/MoviesAndSeries')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const successMessage = require('../shared/const/success.enums')

//This function will get everything from moviesAndSeries collection.

exports.getMovies = async(req,res) => {

    

    try {
        
        
        const movies = await MoviesAndSeries.find({type: 'movie'})
  

        res.json({movies})
        //res.status(200).send(successMessage.sendMovies)
        //Ver de retornar un array con strings para que no se rompa el front

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

