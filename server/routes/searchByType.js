import { Router } from 'express'
const router = Router()
import { check } from 'express-validator'
import { getSearchByType } from '../controllers/searchByTypeControllers.js'

//Get movies or series
//Endpoint: api/searchByType

router.get('/',
 //First checking authentication, then get only movies from this the database
              
    getSearchByType
  
)
export { router };

