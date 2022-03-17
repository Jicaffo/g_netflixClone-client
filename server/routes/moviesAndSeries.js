import express from 'express';
import { check } from 'express-validator';
import * as moviesAndSeriesControllers from '../controllers/moviesAndSeriesControllers.js';

const router = express.Router()

// Get all movies and series
//Endpoint: api/moviesAndSeries

router.get('/',
              
    moviesAndSeriesControllers.getMoviesAndSeries
    
)

router.post('/',
              
    moviesAndSeriesControllers.makeMovie
    
)

export { router } ;



