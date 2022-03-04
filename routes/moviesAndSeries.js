const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const movieControllers = require('../controllers/movieControllers')


//Create an user
//Endpoint: api/users


router.get('/',
 //First checking authentication, then get all projects from this user
              
    movieControllers.getMovies
)



router.get('/',
 //First checking authentication, then get all  from this user
              
    movieControllers.getMovies
)
module.exports = router;



