import express from 'express';
import { check } from 'express-validator';
import * as moviesAndSeriesControllers from '../controllers/mediaController.js';

const router = express.Router()

// Get all movies and series (Base URL: /api/moviesAndSeries/)
//Endpoint: api/moviesAndSeries

router.get('/',
              
    moviesAndSeriesControllers.getMedia
    
)

router.post('/',
              
    moviesAndSeriesControllers.postMedia,
    
)

router.delete('/:id',
              
    (req, res) => moviesAndSeriesControllers.deleteMedia(req, res, req.params.id)
    
)

export { router } ;



