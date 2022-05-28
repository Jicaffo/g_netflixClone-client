import User from "../models/User.js";

// Por el momento sin usar
const validateNonExistingEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const mail = await User.findOne({ email });

    if (mail) return res.status(400).json({ msg: "El email ya existe" });
  } catch (error) {
    return res.status(500).json({ msg: "Algo salió mal" + error });
  }

  next();
};

export default validateNonExistingEmail;
