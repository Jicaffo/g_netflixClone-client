const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const moviesControllers = require('../controllers/moviesControllers')

//Get only movies
//Endpoint: api/movies

router.get('/',

    moviesControllers.getMovies
  
)
module.exports = router;

