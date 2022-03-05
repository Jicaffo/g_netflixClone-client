const MoviesAndSeries = require('../models/MoviesAndSeries')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')


//This function will get everything from moviesAndSeries collection.

exports.findRecommendations = async(req,res) => {

  
    const { genre, type, audienceClasification, director } = req.body

    try {

        const recommend = await MoviesAndSeries.aggregate ({
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


