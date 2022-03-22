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
    //TOFIX: Pasar a profile
    myList: {
        type: [Object]
    },
    

});

export default mongoose.model('UserModel', SchemaUsers)