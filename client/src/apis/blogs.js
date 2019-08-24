import axios from '../http/axios-blog';

const createBlog = async newBlog => {
  try {
    const newBlogData = await axios.post('/', newBlog);
    return newBlogData.data.blog;
  } catch (e) {
    if (!e.response) return e;

    return e.response.data;
  }
};

const getBlog = async blogId => {
  try {
    const newBlogData = await axios.get(`/${blogId}`);
    return newBlogData.data.blog;
  } catch (e) {
    if (!e.response) return e;

    return e.response.data;
  }
};

const updateBlog = async (blogData, blogId) => {
  try {
    const newBlogData = await axios.put(`/${blogId}`, blogData);
    return newBlogData.data.blog;
  } catch (e) {
    if (!e.response) return e;

    return e.response.data;
  }
};
export {
  getBlog,
  updateBlog,
}
export default createBlog;
