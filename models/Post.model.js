
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Setup schema
let postSchema = new Schema({
    creatorId: { 
        type: mongoose.Schema.ObjectId, 
        ref: 'User', 
        required: true 
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "Pending"
    },
    content: {
        type: String,  
        default: "test"
    }
});


// Export Post model
let Post = module.exports = mongoose.model('Post', postSchema);


module.exports.get = function (callback, limit) {
    Post.find(callback).limit(limit);
}