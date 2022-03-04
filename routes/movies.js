const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const moviesControllers = require('../controllers/moviesControllers')


//Get only movies
//Endpoint: api/movies


router.get('/',
 //First checking authentication, then get only movies from this the database
              
    moviesControllers.getMovies
  
    
)
module.exports = router;

