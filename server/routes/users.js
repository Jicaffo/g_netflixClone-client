
import express from 'express';
import userController from '../controllers/userController.js';
import { check } from 'express-validator';

const router = express.Router()

//Endpoint: api/users

// Get one User
router.get('/',
    userController.getAllUsers
);

// Get one User
router.get('/:id',
    userController.getUser
);

// Create new User
router.post('/', 
    // [
    //     check('name', 'The name is obligatory').not().isEmpty(),
    //     check('email', 'Add a valid email').isEmail(),
    //     check('password', 'The password should be 6 characters at least').isLength({min: 6})
    // ],
    userController.postUser

);

router.post('/auth', 
     [
        check('email', 'Add a valid email').isEmail(),
        // check('password', 'The password should be 6 characters at least').isLength({min: 6}) // Tiene sentido en la validación?
     ],
    userController.authUser
);


//Endpoint: /api/users/:userId/profiles

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


/* router.get('/?mediaId=:mediaId&profileId=:profileId',
   (req, res) => myListControllers.getMovieAndSeriesToMyList(req, res, req.params.profileId, req.params.mediaId)
   
) */

export { router }