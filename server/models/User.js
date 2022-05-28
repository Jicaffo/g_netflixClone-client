import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const listsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    items: [String]
})

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    img: {
        type: String,
        require: true, //TOFIX: evaluar si se requiere o viene algo por default
        trim: true
    },
    language: {
        type: String,
        require: true, //TOFIX: evaluar si se requiere o viene algo por default
        trim: true
    },
    automaticReproduction: {
        nextEpisode: Boolean,
        trailers: Boolean,
    },
    lists: {
        type: [listsSchema]
    }

});

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {  
        type: String,
        require: true,
        trim: true,
    },
    profiles: {
        type: [profileSchema]
        //profileId: [ObjectId]; // Alternativa mejor, simil DB Relacional
    }
});

//encripta
usersSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); // TODO: Traer desde el .env (no funciona actualmente)
    return await bcrypt.hash(password, salt);
  };

//desencripta y compara
usersSchema.statics.comparePassword = async (password, passwordRecibido) => {
return await bcrypt.compare(password, passwordRecibido);
};

export default mongoose.model('User', usersSchema)