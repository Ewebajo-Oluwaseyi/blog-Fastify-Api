const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


module.exports = mongoose.model('Post', postSchema)