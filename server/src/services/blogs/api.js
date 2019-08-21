const health = (req, res) => {
  res.json({ status: 'Ok' });
};

const sendResponse = (req, res) => {
  res.json({ msg: 'success', blog: req.blog });
};

const apis = {
  health,
  sendResponse,
};
export default apis;
