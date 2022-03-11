
const mongoose = require('mongoose');

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
    
    myList: {
        type: [Object]
    },
    

});

module.exports = mongoose.model('User', SchemaUsers)