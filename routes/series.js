const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const seriesControllers = require('../controllers/seriesControllers')

//Get only series
//Endpoint: api/series

router.get('/',
              
    seriesControllers.getSeries
  
)
module.exports = router;

