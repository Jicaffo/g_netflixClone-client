import express from 'express';
import { check } from 'express-validator';
import userController from '../controllers/userController.js';
import { validateToken } from '../middlewares/index.js';

const router = express.Router()

// === Endpoint: /api/profiles (obtiene req.userId desde validateToken) ===

// Obtiene todos los perfiles
router.get('/',
    validateToken,
    userController.getAllProfiles
)

// Obtiene un perfil
router.get('/:profileId',
    validateToken,
    userController.getProfile
)

// Crea un perfil
router.post('/',
    validateToken,
    [check('name')
        .isLength({min:3})
        .withMessage('El perfil debe tener 3 caracteres como mínimo')],
    userController.postProfile
)

// Actualiza los datos de un perfil
router.patch('/:profileId',
    validateToken,
    userController.patchProfile
)

// Borra un perfil
router.delete('/:profileId',
    validateToken,
    userController.deleteProfile
)



// === Endpoint: api/profiles/:profileid/lists ===
 
// DELETE /users/:userid/profiles/:profileid/lists/:listName/:mediaId/  

// Obtiene todas las listas del perfil
router.get('/:profileId/lists',
    validateToken,
    userController.getAllLists
)

// Obtiene todos los recursos multimedia de una lista
router.get('/:profileId/lists/:listName',
    validateToken,
    userController.getAllMediaFromList
)

// Obtiene un recurso multimedia de una lista // TODO: Es necesario en alguna situación?
router.get('/:profileId/lists/:listName/:mediaId/',
    validateToken,
    userController.getOneMediaFromList
)

// Elimina un recurso multimedia de una lista
router.delete('/:profileId/lists/:listName/:mediaId/',
    validateToken,
    userController.deleteOneMediaFromList
)

// Agrega un recurso multimedia a una lista dentro del perfil
router.post('/:profileId/lists/:listName/:mediaId/',
    validateToken,
    userController.postMediaToList
)


export { router }