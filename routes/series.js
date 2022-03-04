const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const seriesControllers = require('../controllers/seriesControllers')


//Get only movies
//Endpoint: api/movies


router.get('/',
 //First checking authentication, then get only movies from this the database
              
    seriesControllers.getSeries
  
    
)
module.exports = router;

