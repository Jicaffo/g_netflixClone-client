import express from 'express';
import User from '../models/TestUser.js';
import Profile from '../models/TestProfile.js';
import List from '../models/TestList.js';
import jwt from 'jsonwebtoken';

// To move to separate file

const register = async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(409).json({ msg: "Name, Email & Password required..." });
        } else {
        // Encriptamos el password directamente sobre el req.body para que no queden copias sin encriptar.
        req.body.password = await User.encryptPassword(req.body.password);
        
        const savedUser = await new User(req.body).save();
        //console.log(savedUser);

        //Envio de correo le paso los parámetros
        //envio.enviaMail(savedUser.email, savedUser.name, enlace);
        
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24, // = 86400 = 24hs
        });
        res.status(201).json({ msg: "User created.", savedUser, token });
        }
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong..." + error });
        console.log(error);
    }
}

const login = async (req, res) => {

   const { email, password } = req.body;

   const userFound = await User.findOne({ email });

   if(!userFound) return res.status(400).json({ msg: "Email not found." })
   
   const passwordMatch = await User.comparePassword(
     password, 
     userFound.password
   );
   
   //si el password es incorrecto, no revelo el token y por consola aviso que la pass esta incorrecta.
   if(!passwordMatch) return res.status(401).json({ msg: "Invalid Password.", token: null}); 

   //console.log(userFound);
   const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
       expiresIn: 60 * 60 * 24,
   });

   res.json({ msg: "User logged in.", token });
}

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    res.status(200).json({ msg: "Users retrieved", allUsers });
  } catch (error) {
      res.status(400).json({ msg: "Something went wrong...", error });
  }
}

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    if(!deletedUser) return res.status(404).json({ msg: "User Not Found"});

    res.status(200).json({ msg: "User deleted", deletedUser });
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong...", error });
  }
}
//OK
// Dado que las acciones en la colección 'profiles' no modifican automáticamente las referencias a estos documentos que hay en 'users',
// las funciones que creen o borren documentos deben actualizar también las referencias en ('users.profiles') siempre que corresponda.
const postProfile = async(req,res) => {
    try {
        if (!req.body.name) {
            res.status(409).json({ msg: "Name is required..." });
        } else {
            // Obtenemos el userId
            const parentUserId = req.userId;
            // Lo agregamos como referencia en la propiedad parentUserId del propio perfil
            const savedProfile = await new Profile({...req.body, parentUserId}).save();
            
            const foundUser = await User.findById(req.userId)
            foundUser.profiles.push(savedProfile._id)
            foundUser.save()

            res.status(201).json({ msg: "Profile created.", savedProfile });
        }
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong..." + error });
        console.log(error);
    }
}

const getProfiles = async(req, res) => {
    // Según si recibe o no query/search params, devuelve todos los perfiles o un subset filtrado
    try {
        const user = await User.findById(req.userId);
        
        // Sólo si el usuario logueado tiene el rol 'admin' permite obtener todos los perfiles // NTH: Extraer a función?
        if (!req.query || Object.keys(req.query).length === 0) {
            if (user.role !== "admin") return res.status(401).json({ msg: "You are not allowed to perform this action." });
        }

        // Si el usuario no es admin e intenta obtener información de otro usuario la petición se rechaza
        if (req.query.parentUserId && (req.query.parentUserId !== req.userId) && (user.role !== "admin")){
            return res.status(401).json({ msg: "You are not allowed to fetch others users' data" });
        }
        
        // 'sanitizeFilter: true' evita inyecciones SQL mediante query/search params
        const profilesQuery = await Profile.find(req.query).setOptions({ sanitizeFilter: true })
        res.status(200).json({ msg: "Profiles retrieved", profilesQuery });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong...", error });
    }
}

const deleteProfile = async(req,res) => {
    try {
        // Borramos el profile
        const deletedProfile = await Profile.findByIdAndRemove(req.params.id);
        if(!deletedProfile) return res.status(404).json({ msg: "Profile Not Found"});

        // Borramos la referencia en el array 'profiles' del usuario que lo contiene y lo actualizamos.
        const user = await User.findById(deletedProfile.parentUserId);
        user.profiles = user.profiles.filter(profile => profile.toString() != deletedProfile._id.toString());
        user.save()
    
        res.status(200).json({ msg: "Profile deleted", deletedProfile });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong...", error });
    }
}

// Dado que las acciones en la colección 'lists' no modifican automáticamente las referencias a estos documentos que hay en 'profiles',
// las funciones que creen o borren documentos deben actualizar también las referencias en ('profiles.lists') siempre que corresponda.
const postList = async(req,res) => {
    try {
        // Obtenemos el profileId
        const parentProfileId = req.params.profileId
        // Lo agregamos como referencia en la propiedad parentUserId del propio perfil
        const savedList = await new List({...req.body, parentProfileId}).save();
        
        const foundProfile = await Profile.findById(parentProfileId)
        foundProfile.lists.push(savedList._id)
        foundProfile.save()

        res.status(201).json({ msg: "List created.", savedList });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong..." + error });
        console.log(error);
    }
}

const getLists = async(req, res) => {
    // Según si recibe o no query/search params, devuelve todas las listas o un subset filtrado
    try {
        const user = await User.findById(req.userId);
        const isAdmin = user.role === "admin"
        
        // Sólo si el usuario logueado tiene el rol 'admin' permite obtener todos los perfiles
        if (!req.query || Object.keys(req.query).length === 0) {
            if (!isAdmin) return res.status(401).json({ msg: "You are not allowed to perform this action." });
        }
        
        // De usar URL params...
        const parentProfileId = req.params.profileId
        const isCurrentUserProfile = user.profiles.includes(parentProfileId)
        // Si el usuario no es admin e intenta obtener información de otro usuario, la petición se rechaza
        if (!isCurrentUserProfile && !isAdmin) return res.status(401).json({ msg: "You are not allowed to fetch others users' data" });
        // Trae todas las listas del perfil indicado 
        const currentProfileLists = await List.find({parentProfileId}).setOptions({ sanitizeFilter: true })
        res.status(200).json({ msg: "Lists retrieved", currentProfileLists });

        // // De usar query/search params...
        // const profileId = req.query.parentProfileId
        // const isUserProfile = user.profiles.includes(profileId)
        // // Si el usuario no es admin e intenta obtener información de otro usuario, la petición se rechaza
        // if (profileId && !isUserProfile && !isAdmin ){
        //     return res.status(401).json({ msg: "You are not allowed to fetch others users' data" });
        // }
        // // Trae las listas que coincidan con los parámetros de búsqueda
        // // 'sanitizeFilter: true' evita inyecciones SQL mediante query/search params
        // const listsQuery = await List.find(req.query).setOptions({ sanitizeFilter: true })
        // res.status(200).json({ msg: "Lists retrieved", listsQuery });

    } catch (error) {
        res.status(400).json({ msg: "Something went wrong..."+error, error });
    }
}

const deleteList = async(req,res) => {
    try {
        // Borramos la lista
        const deletedList = await List.findByIdAndRemove(req.params.listId);
        if(!deletedList) return res.status(404).json({ msg: "List Not Found"});

        // Borramos la referencia en el array 'lists' del perfil que la contiene y la actualizamos.
        const profile = await Profile.findById(deletedList.parentProfileId);
        profile.lists = profile.lists.filter(list => list.toString() != deletedList._id.toString());
        console.log(profile.lists);
        profile.save()
    
        res.status(200).json({ msg: "List deleted", deletedList });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong...", error });
    }
}

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
        
    if (!token) return res.status(403).json({ msg: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Obtenemos el ID del usuario guardado en el JWT y lo adjuntamos como propieded userId en el objeto req para tenerlo disponible.
    req.userId = decoded.id;

    // Validamos que el usuario exista en la DB
    const user = await User.findById(req.userId); // NTH: Dejar guardado el objeto entero como req.user para evitar duplicado en otros controladores?
    if (!user) return res.status(400).json({ msg: `Token Error. userId '${req.userId}' not found in DB.` });

    next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized", error });
  }
};

const adminRequired = async (req, res, next) => {
  try {
    //Requiere que previamente validateToken haya cargado req.userId
    if (!req.userId) return res.status(401).json({ msg: "A valid token is required" });

    const user = await User.findById(req.userId);
    if (user.role !== "admin") return res.status(401).json({ msg: "You need an admin role to perform this action." });

  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong... " + error });
  }
  next();
};

const router = express.Router()

// === Endpoint: api/test ===

router.post('/auth/register', register)
router.post('/auth/login', login)
router.get('/users', validateToken, adminRequired, getAllUsers)
router.delete('/users/:id', validateToken, adminRequired, deleteUser)

router.post('/profiles', validateToken, postProfile)
router.get('/profiles', validateToken, getProfiles)
router.delete('/profiles/:id', validateToken, /*validateSameUser,*/ deleteProfile)

// NTH: De encontrar como obtener profileId para esta primer ruta, podría removerse de las rutas
// en todos los casos y dejar solo a partir de '/lists'.
router.post('/profiles/:profileId/lists', validateToken, postList) 
router.get('/profiles/:profileId/lists', validateToken, getLists)
router.delete('/profiles/:profileId/lists/:listId', validateToken, /*validateSameUser,*/ deleteList)

//router.post('/profiles/:profileId/lists/:listId', validateToken, /*validateSameUser,*/ addMediaToList)
//router.delete('/profiles/:profileId/lists/:listId/:mediaId', validateToken, /*validateSameUser,*/ removeMediaToList)

// /lists/:listId/mediaId/:mediaId(body)


export { router } ;