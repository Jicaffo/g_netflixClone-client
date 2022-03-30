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
    (req, res) => mediaController.deleteMedia(req, res, req.params.id)
)

// Obtiene recursos filtrados
router.get('/byType=:type',
    (req, res) => mediaController.getMediaByType(req, res)
);

router.get('/byGenre=:genre',
    (req, res) => mediaController.getMediaByGenre(req, res)
);

// router.post('user/:userid/profile/:profileid/recommendations',
// //First checking authentication, then get all recommedantions for this user
//     mediaController.getRecommendedMedia
// )

export { router } ;



