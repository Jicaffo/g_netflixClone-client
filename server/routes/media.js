import express from 'express';
import { check } from 'express-validator';
import mediaController from '../controllers/mediaController.js';

const router = express.Router()

// Get all movies and series (Base URL: /api/moviesAndSeries/)
//Endpoint: api/moviesAndSeries

router.get('/',
              
    mediaController.getAllMedia
    
)

router.post('/',
              
    mediaController.postMedia,
    
)

router.delete('/:id',
              
    (req, res) => mediaController.deleteMedia(req, res, req.params.id)
    
)

export { router } ;



