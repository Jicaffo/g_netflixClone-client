import express from 'express';
import { check } from 'express-validator';
import mediaController from '../controllers/mediaController.js';

const router = express.Router()

// Endpoint: /api/media

// Obtiene todos los recursos multimedia.
router.get('/', mediaController.getAllMedia)

// Obtiene un recurso por Id
router.get('/:id', mediaController.getOneMediaById)

// Interactuar con un recurso multimedia particular
router.post('/', mediaController.postMedia)

router.delete('/:id',
    mediaController.deleteMedia
)

// Obtiene recursos filtrados // TODO: A implementar lógica como search params en /media: media?type=serie&genre=drama 
// router.get('/byType=:type',
//     mediaController.getMediaByType
// );

// router.get('/byGenre=:genre',
//     mediaController.getMediaByGenre
// );

// router.post('user/:userid/profile/:profileid/recommendations',
// //First checking authentication, then get all recommedantions for this user
//     mediaController.getRecommendedMedia
// )

export { router } ;



