import { Router } from 'express'
import { check } from 'express-validator'
import { getSearchByGenre } from '../controllers/searchByGenreController.js'

const router = Router()

//Get all movies and series by genre
//Endpoint: /api/movies/genre

router.get('/',
 
     getSearchByGenre
    
)

export { router };


