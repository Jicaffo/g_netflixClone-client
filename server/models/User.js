import "dotenv/config";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const profileImg = [
    // "https://randomuser.me/api/portraits/lego/1.jpg",
    "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71",
    "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcmNAN9bHNZNT9Fm3f-YF1y3Bgj-x3Z9dWYar46_6wAOcR4q5NZS3MUf7SQjkqtVdyWz2DX6SfBHiNourzUjMbGTdDEW.png?r=abe",
    "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ2KWouF1OCDAtpdNIETPtEAVAywuZcnNb2gJhGfIzhaju9kWWAguLvUkNg_1Y57iTUFVn9_6a9ZmNrdxCHxxzM8yRqX.png?r=c08",
    "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUngvSNL3ED6g9NsWhW9_FdDDzKC1gZCmLxi7mim9httnXRVYSxNJHJpbvblu0K_S94YoyPlkA2dja-zfL17UYw6WHkC.png?r=d26",
];

const getRandomProfileImg = () => {
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
        default: getRandomProfileImg,
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