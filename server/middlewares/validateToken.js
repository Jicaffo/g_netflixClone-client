import 'dotenv/config'
import jwt from "jsonwebtoken";
import User from '../models/User.js'

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

export default validateToken;