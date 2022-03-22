import express from 'express';
import * as profileController from '../controllers/profileController.js';

const router = express.Router()

// Get all movies and series
//Endpoint: /api/myList
//api/person?firstName=john&lastName=doe

// Obtiene todos los perfiles
router.get('/',
    profileController.getAllProfiles
   
)
// Obtiene un perfil
router.get('/:id',
    profileController.getProfile
   
)

// Crea un perfil
router.post('/',
   profileController.postProfile
   
)


/* router.get('/?mediaId=:mediaId&profileId=:profileId',
   (req, res) => myListControllers.getMovieAndSeriesToMyList(req, res, req.params.profileId, req.params.mediaId)
   
) */


export { router };