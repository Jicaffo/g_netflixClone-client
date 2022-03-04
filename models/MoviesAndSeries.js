const mongoose = require('mongoose');



const MovieSchema = mongoose.Schema(
    
{
    title: {type: String, require: true, unique: true },
    // description: {type: String, require: true},
    // img: {type: String, require: true},
    // imgTitle: {type: String},
    // imgSmall: {type: String},
    // trailer: {type: String},
    // year: {type: String},
    genre: {type: String},
    // time: {type: Number},
    // director: {type: String},
    // cast: {type: Array},
    // audienceClasification: {type: String},
    type: {type: String, require: true}    //Type: Serie or movie       Inicio(Default)
},
{ timestamps: true }

)


module.exports = mongoose.model('MoviesAndSeries', MovieSchema)
