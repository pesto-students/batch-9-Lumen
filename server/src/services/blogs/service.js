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

const getBlogsForQuery = async (page = 1, categories, searchString) => {
  const maxBlogsPerPage = 10;
  const pageOffset = parseInt(page, 10) - 1;
  const blogsToSkip = pageOffset * maxBlogsPerPage;
  const query = {
    private: false,
    published: true,
  };
  const hasCategories = categories && categories.length > 0;
  if (hasCategories) {
    query.category = { $in: categories };
  }

  const hasSearchString = searchString && searchString.length > 0;
  if (hasSearchString) {
    query.$text = { $search: searchString };
  }
  const options = { score: { $meta: 'textScore' } };
  const blogs = await Blogs.find(query, options)
    .sort({ score: { $meta: 'textScore' } })
    .skip(blogsToSkip)
    .limit(maxBlogsPerPage);
  return blogs;
};

export {
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlogById,
  getBlogsForQuery,
};
