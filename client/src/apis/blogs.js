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

export default createBlog;
