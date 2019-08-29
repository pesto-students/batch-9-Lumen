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

const getBlog = async blogId => {
  try {
    const newBlogData = await axios.get(`/${blogId}`);
    return newBlogData.data.blog;
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

const getBlogsFromUsername = async (username) => {
  try {
    const newBlogData = await axios.get(`/public/${username}`);
    return newBlogData.data.blogs;
  } catch (e) {
    if (!e.response) throw e;

    throw e.response.data;
  }
}

const getUserBlogs = async () => {
  try {
    const userBlogs = await axios.get(`/`);
    return userBlogs.data.blogs;
  } catch (e) {
    if (!e.response) throw e;

    throw e.response.data;
  }
}

const searchBlogs = async (pageNumber, searchString = '', categoryList = []) => {
  try {

    const categories = categoryList.join(',');
    const response = await axios.get(`/home/${pageNumber}?search=${searchString}&category=${categories}`);
    return response.data.blogs;
  } catch(e) {
    if(!e.response) {
      throw e;
    }
    throw new Error(e.response.data);
  }
}
export {
  getBlog,
  updateBlog,
  getBlogsFromUsername,
  getUserBlogs,
  searchBlogs,
}
export default createBlog;
