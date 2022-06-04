import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
    },
    img: {
        type: String,
        default: "https://randomuser.me/api/portraits/lego/1.jpg",
        trim: true,
    },
    language: {
        type: String,
        trim: true,
        enum: ["eng", "es"],
        default: "eng",
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
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
    }],
    parentUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //require: true,
    },

});


export default mongoose.model('Profile', profileSchema);