import User from "../models/User.js";

const adminRequired = async (req, res, next) => {
  try {
    //Requiere que previamente validateToken haya cargado req.userId
    const user = await User.findById(req.userId);

    if (!user) return res.status(400).json({ msg: "El usuario no existe" });
    if (user.role !== "admin") return res.status(401).json({ msg: "No tienes permisos de administrador" });
  } catch (error) {
    return res.status(500).json({ msg: "Algo salió mal" + error });
  }
  next();
};

export default adminRequired;