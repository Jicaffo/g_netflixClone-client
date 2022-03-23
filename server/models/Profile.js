import mongoose from 'mongoose';

const SchemaProfile = mongoose.Schema({
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
        nextEpisode: {
            type: Boolean,
        },
        trailers: {
            type: Boolean,
        }
    },
    myList: {
        type: [Object]
    },
    

});

export default mongoose.model('Profile', SchemaProfile)