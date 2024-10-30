const BlogRepository = require("../Repository/BlogRepository");

async function createBlog(req, res, next)
{
    try
    {
        const { author, date, content, tags } = req.body;
        const newBlog = 
        {
            author: author, 
            date: date,
            content: content, 
            tags: tags
        };
        const createdBlog = await BlogRepository.createBlog(newBlog);
        res.status(201).send(createdBlog._id);
    }
    catch(err)
    {
        next(err);
    }    
}
async function deleteBlog(req, res, next)
{
    try
    {
        const { id } = req.body;
        await BlogRepository.deleteBlog(id);
        res.status(200).send("Blog deleted successfully");
    }
    catch(err)
    {
        next(err);
    } 
}
async function editBlog(req, res, next)
{
    try
    {
        const { id, updatedContent } = req.body;
        const updatedBlog = await BlogRepository.editBlog(id, updatedContent);
        res.status(201).send(updatedBlog._id);
    }
    catch(err)
    {
        next(err);
    } 
}
async function getBlogById(req, res, next)
{
    try
    {
        const id  = req.params.id;
        const retrievedBlog = await BlogRepository.getBlogById(id);
        res.status(200).send(retrievedBlog);
    }
    catch(err)
    {
        next(err);
    }
}
async function getBlogsByTags(req, res, next)
{
    try
    {
        const tags = req.query.tags;
        console.log(tags);
        const retrievedBlogs = await BlogRepository.getBlogsByTags(tags);
        res.status(200).send(retrievedBlogs);
    }
    catch(err)
    {
        next(err);
    }
}

module.exports = {
    createBlog,
    deleteBlog,
    editBlog,
    getBlogById,
    getBlogsByTags
}