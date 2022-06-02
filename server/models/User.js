import "dotenv/config";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const profileImg = [
    "https://randomuser.me/api/portraits/lego/1.jpg",
    "https://randomuser.me/api/portraits/lego/2.jpg",
    "https://randomuser.me/api/portraits/lego/3.jpg",
    "https://randomuser.me/api/portraits/lego/4.jpg",
];

function getRandomProfileImg() {
    const randomNumber = Math.floor(Math.random() * profileImg.length);
    return profileImg[randomNumber];
}

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
        default: getRandomProfileImg(),
        trim: true
    },
    mainProfile: {
        type: Boolean,
        default: false,
    },
    preferences: {
        kidsProfile: {
            type: Boolean,
            default: false,
        },
        language: {
            type: String,
            trim: true,
            enum: ["eng", "es"],
            default: "es",
        },
        automaticReproduction: {
            nextEpisode: {
                type: Boolean,
                default: true,
            },
            trailers: {
                type: Boolean,
                default: true,
            },
        },
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
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    profiles: {
        type: [profileSchema]
        //profileId: [mongoose.Schema.Types.ObjectId]; // Alternativa mejor, simil DB Relacional, convirtiendo Profile en un nuevo esquema/modelo
    }
});

// En los métodos en general NO deberíamos utilizar funciones flecha ya que rompen el binding del "this" (en estos casos no afecta por que no lo usamos)
//encripta
usersSchema.statics.encryptPassword = async (password) => {
    // Al recuperar datos del process.env los trae como string por lo que debemos parsearlo
    const saltRounds = parseInt(process.env.SALT_ROUNDS) 
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  };

//desencripta y compara
usersSchema.statics.comparePassword = async (password, passwordRecibido) => {
return await bcrypt.compare(password, passwordRecibido);
};

export default mongoose.model('User', usersSchema)