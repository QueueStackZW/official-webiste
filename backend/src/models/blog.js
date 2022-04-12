const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    tags: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
    timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;