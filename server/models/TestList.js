import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media',
    }],
    parentProfileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        //require: true,
    },
})


export default mongoose.model('List', listSchema);