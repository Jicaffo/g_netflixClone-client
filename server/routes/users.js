import express from 'express';
import { check } from 'express-validator';
import userController from '../controllers/userController.js';
import { validateToken, adminRequired, validateSameUser } from '../middlewares/index.js';

const router = express.Router()

// === Endpoint: api/users ===

// Obtiene todos los usuarios
router.get('/',
    validateToken,
    adminRequired,
    userController.getAllUsers
);

// Obtiene un usuario
router.get('/:id',
    validateToken,
    //validateSameUser,
    userController.getUser
);

// Actualiza un usuario
router.patch('/:id',
    validateToken,
    //validateSameUser,
    userController.patchUser
);

// Elimina un usuario
router.delete('/:id',
    validateToken,
    //validateSameUser,
    userController.deleteUser
);

// Crea un nuevo usuario
router.post('/',
    validateToken,
    adminRequired,
    // [
    //     check('name', 'The name is obligatory').not().isEmpty(),
    //     check('email', 'Add a valid email').isEmail(),
    //     check('password', 'The password should be 6 characters at least').isLength({min: 6})
    // ],
    userController.postUser
);

export { router }