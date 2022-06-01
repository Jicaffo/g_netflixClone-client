import express from 'express';
import { check } from 'express-validator';
import mediaController from '../controllers/mediaController.js';
import validateToken from '../middlewares/validateToken.js'
import adminRequired from '../middlewares/adminRequired.js'

const router = express.Router()

// Endpoint: /api/media

// Obtiene todos los recursos multimedia (o una versión filtrada por req.query).
router.get('/',
    validateToken,
    mediaController.getMedia
)

// Obtiene un recurso por Id
router.get('/:id',
    validateToken,
    mediaController.getOneMediaById
)

// Interactuar con un recurso multimedia particular
router.post('/',
    validateToken,
    adminRequired,
    mediaController.postMedia
)

router.delete('/:id',
    validateToken,
    adminRequired,
    mediaController.deleteMedia
)

// router.post('user/:userid/profile/:profileid/recommendations',
// //First checking authentication, then get all recommedantions for this user
//     mediaController.getRecommendedMedia
// )

export { router } ;



