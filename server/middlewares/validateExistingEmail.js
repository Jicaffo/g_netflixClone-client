import User from "../models/User.js";

// TODO: Las verificaciones de mail podrían ser validaciones de express validator?
// Por el momento sin usar
const validateExistingEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "No existe un usuario registrado con el mail ingresado" });

    req.userId = user._id;

  } catch (error) {
    return res.status(500).json({ msg: "Algo salió mal" + error });
  }
  next()
};

export default validateExistingEmail;