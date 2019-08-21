import Blogs from '../../models/blogs';

const createBlog = async (title, content, userId) => {
  const blog = {
    title,
    content,
    userId,
  };

  const newBlog = await Blogs.create(blog);
  return newBlog.toObject();
};

const getBlogById = async (blogID) => {
  const blog = await Blogs.findById(blogID);
  return blog.toObject();
};

const updateBlog = async (blogId, newBlog) => {
  const updatedBlog = await Blogs.findByIdAndUpdate(blogId, newBlog, { new: true });
  return updatedBlog.toObject();
};

const deleteBlogById = async (blogID) => {
  const blog = await Blogs.findByIdAndDelete(blogID);
  return blog.toObject();
};

export {
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlogById,
};
