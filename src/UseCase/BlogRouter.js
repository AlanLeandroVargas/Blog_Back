const express = require('express');
const BlogController = require('./BlogController')
const blogRouter = express.Router();

blogRouter.post('/blog', BlogController.createBlog);
blogRouter.delete('/blog', BlogController.deleteBlog);
blogRouter.put('/blog', BlogController.editBlog);
blogRouter.get('/blog/tags', BlogController.getBlogsByTags);
blogRouter.get('/blog/:id', BlogController.getBlogById);

module.exports = blogRouter;