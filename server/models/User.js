import mongoose from 'mongoose';

const SchemaUsers = mongoose.Schema({
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
    //TOFIX: Especificar tipo de esquema custom "Profile" (ver como)
    profile: {
        type: [Object]
    },
    

});

export default mongoose.model('User', SchemaUsers)