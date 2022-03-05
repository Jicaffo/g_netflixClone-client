const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const searchByTypeControllers = require('../controllers/searchByTypeControllers')


//Get only movies
//Endpoint: api/movies


router.get('/',
 //First checking authentication, then get only movies from this the database
              
    searchByTypeControllers.getSearchByType
  
    
)
module.exports = router;

