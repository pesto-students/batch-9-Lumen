
const testApi = (req, res) => {
  res.json({ msg: 'Working' });
};

const signUp = (req, res) => {
  res.json({ msg: 'Working', user: req.user });
};

const apis = {
  testApi,
  signUp,
};
export default apis;
