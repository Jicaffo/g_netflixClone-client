const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const moviesAndSeriesControllers = require('../controllers/moviesAndSeriesControllers')

// Get all movies and series
//Endpoint: api/moviesAndSeries

router.get('/',
              
    moviesAndSeriesControllers.getMoviesAndSeries
    
)

module.exports = router;



