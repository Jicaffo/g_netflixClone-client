import mongoose from 'mongoose';

const defaults = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYbm_s-qPryvSAZT6y6sSbp054hrmjEEdw4xKabBUM-BUGNniw9vYkCSrWOd2-IaVfMr6B7L91JZPhs852JicovS7LmC9KSsBjP-o-ApgPnQWseV8nL130HoJZ3hixeseB9H.jpg?r=8e3",
    trailer: "1empA2OP5JU",
}

const mediaSchema = mongoose.Schema(
    
{
    title: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        default: defaults.description,
        //require: true
    },
    img: {
        type: String,
        default: defaults.img,
        require: true,
    },
    // imgSmall: {
    //     type: String,
    // },
    // imgTitle: {
    //     type: String,
    // },
    resourceUrl: {
        type: String,
        //require: true,
    },
    trailer: {
        type: String, // ID de Youtube
        default: defaults.trailer,
    },
    year: {
        type: String,
    },
    genre: {
        type: String,
        enum: ["drama", "comedy", "adventure", "N/A"],
        default: "N/A",
    },
    // time: {
    //     type: Number,
    // },
    director: {
        type: String,
        default: "N/A",
    },
    cast: {
        type: Array,
    },
    audienceClasification: {
        type: String,
        enum: ["ATP", "7+", "13+", "16+", "18+"],
        default: "18+"
    },
    type: {
        type: String,
        enum: ["movie","serie"],
        default: "movie",
        //require: true,
    }
   
},
{ timestamps: true }

)


export default mongoose.model('Media', mediaSchema)
