
import express from 'express';
import userController from '../controllers/userController.js';
import { check } from 'express-validator';

const router = express.Router()

// === Endpoint: api/users ===


// Obtiene todos los usuarios
router.get('/',
    userController.getAllUsers
);

// Obtiene un usuario
router.get('/:id',
    userController.getUser
);

// Crea un nuevo usuario
router.post('/', 
    // [
    //     check('name', 'The name is obligatory').not().isEmpty(),
    //     check('email', 'Add a valid email').isEmail(),
    //     check('password', 'The password should be 6 characters at least').isLength({min: 6})
    // ],
    userController.postUser

);

// === Endpoint: api/users/auth ===

// Autentifica el usuario, validando sus datos con el servidor
router.post('/auth', 
     [
        check('email', 'Add a valid email').isEmail(),
        // check('password', 'The password should be 6 characters at least').isLength({min: 6}) // Tiene sentido en la validación?
     ],
    userController.authUser
);

// Para corroborar la autentificación
/* "name": "usuarioNuevo2.0",
"email": "usuarioNuevo2.0@gmail.com",
"password": "123456" */


// === Endpoint: /api/users/:userId/profiles ===

// Obtiene todos los perfiles
router.get('/:userId/profiles',
    userController.getAllProfiles
)
// Obtiene un perfil
router.get('/:userId/profiles/:profileId',
    userController.getProfile
)

// Crea un perfil
router.post('/:userId/profiles',
    [check('name')
        .isLength({min:3})
        .withMessage('El perfil debe tener 3 caracteres como mínimo')],
   userController.postProfile
)

// Actualiza los datos de un perfil
router.patch('/:userId/profiles/:profileId',
    userController.patchProfile
)

// Borra un perfil
router.delete('/:userId/profiles/:profileId',
    userController.deleteProfile
)



// === Endpoint: api/users/:userid/profiles/:profileid/lists ===

// DELETE/GETONE /users/:userid/profiles/:profileid/lists?listName=:myList&mediaId=:id/  
//  DELETE /users/:userid/profiles/:profileid/lists/:listName/:mediaId/  

// Obtiene todas las listas del perfil
router.get('/:userId/profiles/:profileId/lists',
   userController.getAllLists
)

// Obtiene todos los recursos multimedia de una lista
router.get('/:userId/profiles/:profileId/lists/:listName',
   userController.getAllMediaFromList
)

// Obtiene un recurso multimedia de una lista
router.get('/:userId/profiles/:profileId/lists/:listName/:mediaId/',
   userController.getOneFromList
)

// Elimina un recurso multimedia de una lista
router.delete('/:userId/profiles/:profileId/lists/:listName/:mediaId/',
   userController.deleteOneFromList
)

// Agrega un recurso multimedia a una lista dentro del perfil
router.post('/:userId/profiles/:profileId/lists/:listName/:mediaId/',
   userController.postMediaToList
)





export { router }