import express from 'express';
import { check } from 'express-validator';
import * as myListControllers from '../controllers/myListControllers.js';

const router = express.Router()

// Get all movies and series
//Endpoint: api/moviesAndSeries

router.post('/',
              
   myListControllers.postMovieAndSeriesToMyList
    
)


router.get('/',
              
   myListControllers.getMovieAndSeriesToMyList
    
)

export { router };



