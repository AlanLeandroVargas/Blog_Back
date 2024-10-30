const BlogModel = require("./BlogModel");
async function createBlog(newBlog)
{
    const createdBlog = new BlogModel(newBlog);
    await createdBlog.save();
    return createdBlog;
}
async function deleteBlog(id)
{
    const deletedBlog = await BlogModel.findByIdAndDelete(id);
    if(!deletedBlog) throw new Error("Blog not found");
}
async function editBlog(id, updatedContent)
{
    const updatedBlog = await BlogModel.findById(id);
    if(!updatedBlog) throw new Error("Blog not found");
    updatedBlog.content = updatedContent;
    await updatedBlog.save();
    return updatedBlog;
}
async function getBlogById(id)
{
    const retrievedBlog = await BlogModel.findById(id);
    if(!retrievedBlog) throw new Error("Blog not found");
    return retrievedBlog;
}
async function getBlogsByTags(tags)
{
    const retrievedBlogs = await BlogModel.find({tags: { $all: tags }});
    if(!retrievedBlogs) throw new Error("Blogs not found");    
    return retrievedBlogs;
}

module.exports = {
    createBlog,
    deleteBlog,
    editBlog,
    getBlogById,
    getBlogsByTags
}
