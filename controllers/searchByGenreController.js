const MoviesAndSeries = require('../models/MoviesAndSeries')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')


//This function will get everything from moviesAndSeries collection.

exports.getSearchByGenre = async(req,res) => {

    // console.log(req)
    // console.log(res)
    const { genre, type } = req.body

    try {

        console.log(genre)
        console.log(type)

        const moviesByGenre = await MoviesAndSeries.find({
            type,
            genre
        
        })
 
         res.json({'right': 'okay'})
         console.log(moviesByGenre)



    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}


