import axios from '../http/axios-blog';

const createBlog = async newBlog => {
  try {
    const newBlogData = await axios.post('/', newBlog);
    return newBlogData.data.blog;
  } catch (e) {
    if (!e.response) throw e;

    throw e.response.data;
  }
};

const getBlog = async (blogId, draftPath, privatePath) => {
  try {
    let requestUrl = `/${blogId}`;
    if (draftPath) {
      requestUrl = `/share/draft/${draftPath}${requestUrl}`;
    } else if (privatePath) {
      requestUrl = `/share/private/${privatePath}${requestUrl}`;
    }
    const newBlogData = await axios.get(requestUrl);
    return newBlogData.data.blog;
  } catch (e) {
    if (!e.response) throw e;

    throw e.response.data;
  }
};

const deleteBlog = async (blogId) => {
  try {
    const requestUrl = `/${blogId}`;
    const response = await axios.delete(requestUrl);
    return response.data;
  } catch (e) {
    if (!e.response) throw e;

    throw e.response.data;
  }
};

const updateBlog = async (blogData, blogId) => {
  try {
    const blogsData = await axios.put(`/${blogId}`, blogData);
    return blogsData.data.blog;
  } catch (e) {
    if (!e.response) throw e;

    throw e.response.data;
  }
};

const getBlogsFromUsername = async username => {
  try {
    const newBlogData = await axios.get(`/public/${username}`);
    return newBlogData.data.blogs;
  } catch (e) {
    if (!e.response) throw e;

    throw e.response.data;
  }
};

const getUserBlogs = async () => {
  try {
    const userBlogs = await axios.get(`/`);
    return userBlogs.data.blogs;
  } catch (e) {
    if (!e.response) throw e;

    throw e.response.data;
  }
};

const searchBlogs = async (
  pageNumber,
  searchString = '',
  categoryList = []
) => {
  try {
    const categories = categoryList.join(',');
    const response = await axios.get(
      `/home/${pageNumber}?search=${searchString}&category=${categories}`
    );
    return response.data.blogs;
  } catch (e) {
    if (!e.response) {
      throw e;
    }
    throw new Error(e.response.data);
  }
};
const getTopBlogs = async (pageNumber = 1) => {
  try {
    const response = await axios.get(`/top/${pageNumber}`);
    return response.data.blogs;
  } catch (e) {
    if (!e.response) {
      throw e;
    }
    throw e.response.data.msg;
  }
};

export {
  getBlog,
  updateBlog,
  getBlogsFromUsername,
  getUserBlogs,
  searchBlogs,
  getTopBlogs,
  deleteBlog,
};
export default createBlog;
