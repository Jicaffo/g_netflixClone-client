const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const searchByGenreController = require('../controllers/searchByGenreController')

//Get all movies by genre
//Endpoint: /api/movies/genre


router.get('/',
 
     searchByGenreController.getSearchByGenre
    
)

module.exports = router;


