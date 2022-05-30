import "dotenv/config";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    },
    password: {  
        type: String,
        trim: true,
        require: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"], // Valida que sólo se pueda ingresar una de las opciones indicadas.
        default: "user",
    },
    profiles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
    }],
});

// En los métodos en general NO deberíamos utilizar funciones flecha ya que rompen el binding del "this" (en estos casos no afecta por que no lo usamos)
//encripta
userSchema.statics.encryptPassword = async (password) => {
    // Al recuperar datos del process.env los trae como string por lo que debemos parsearlo
    const saltRounds = parseInt(process.env.SALT_ROUNDS) 
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  };

//desencripta y compara
userSchema.statics.comparePassword = async (storedPassword, recievedPassword) => {
return await bcrypt.compare(storedPassword, recievedPassword);
};

export default mongoose.model('TestUser', userSchema);