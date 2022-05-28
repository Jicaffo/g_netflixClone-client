import 'dotenv/config'
import jwt from "jsonwebtoken";

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    
    console.log(token);
    
    if (!token) return res.status(403).json({ msg: "No hay token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Obtenemos el ID del usuario guardado en el JWT y lo adjuntamos como propieded userId en el objeto req para tenerlo disponible.
    req.userId = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({ msg: "No autorizado" });
  }
};

export default validateToken;