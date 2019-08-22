import { getBlogsForQuery } from './service';

const health = (req, res) => {
  res.json({ status: 'Ok' });
};

const sendResponse = (req, res) => {
  res.json({ msg: 'success', blog: req.blog });
};

const getBlogs = async (req, res) => {
  const { pageNumber } = req.params.pageNumber;
  const { category = '' } = req.query;
  const { search = '' } = req.query;
  const categories = category.split(',');
  const blogs = await getBlogsForQuery(pageNumber, categories, search);
  res.json({ msg: 'Working', blogs });
};

const apis = {
  health,
  sendResponse,
  getBlogs,
};
export default apis;
