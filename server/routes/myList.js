import express from 'express';
import { check } from 'express-validator';
import * as myListControllers from '../controllers/myListControllers.js';

const router = express.Router()

// Get all movies and series
//Endpoint: /api/myList
//api/person?firstName=john&lastName=doe

router.post('/?mediaId=:mediaId&profileId=:profileId',
   (req, res) => myListControllers.postMovieAndSeriesToMyList(req, res, req.params.profileId, req.params.mediaId)
   
)


/* router.get('/?mediaId=:mediaId&profileId=:profileId',
   (req, res) => myListControllers.getMovieAndSeriesToMyList(req, res, req.params.profileId, req.params.mediaId)
   
) */
router.get('/',
   myListControllers.getMovieAndSeriesToMyList
   
)

export { router };



