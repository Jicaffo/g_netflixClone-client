import mongoose from 'mongoose';

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
    myList: [mongoose.ObjectId]

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
    }
});

export default mongoose.model('User', usersSchema)