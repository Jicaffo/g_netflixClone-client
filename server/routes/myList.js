const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const myListControllers = require('../controllers/myListControllers')

// Get all movies and series
//Endpoint: api/moviesAndSeries

router.post('/',
              
   myListControllers.postMovieAndSeriesToMyList
    
)


router.get('/',
              
   myListControllers.getMovieAndSeriesToMyList
    
)
module.exports = router;



