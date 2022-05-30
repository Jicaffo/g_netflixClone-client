import User from "../models/User.js";

const validateSameUser = async (req, res, next) => {
  try {
    // Valida que se esté accediendo a los datos del usuario propio (ya logueado)
    // Requiere que previamente validateToken haya cargado req.userId
    // NTH: TOFIX: Lo siguiente funcionaría solo para las rutas user/:id, ver como adaptarlo a perfiles y otras.
    if (req.params.id !== req.userId) return res.status(401).json({ msg: "Solo puedes acceder a los datos de tu cuenta" });
  } catch (error) {
    return res.status(500).json({ msg: "Algo salió mal" + error });
  }
  next();
};

export default validateSameUser;