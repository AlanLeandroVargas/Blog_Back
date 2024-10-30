const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        content: { type: String, required: true},
        date: { type: Date, default: Date.now}
    });

const blogSchema = new mongoose.Schema(
    {
        author: { type: String, required: true},
        date: { type: Date, default: Date.now},
        content: { type: String, required: true},
        tags: { type: [String], default: []},
        comments: { type: [commentSchema], default: []}
    });

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;