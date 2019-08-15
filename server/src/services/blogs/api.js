const health = (req, res) => {
  res.json({ status: 'Ok' });
};

const createBlog = (req, res) => {
  res.json({ msg: 'Working' });
};

const readBlog = (req, res) => {
  res.json({ msg: 'test' });
};

const updateBlog = (req, res) => {
  res.json({ msg: 'test' });
};

const deleteBlog = (req, res) => {
  res.json({ msg: 'test' });
};

const apis = {
  health,
  createBlog,
  readBlog,
  deleteBlog,
  updateBlog,
};
export default apis;
