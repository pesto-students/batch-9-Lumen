
const testApi = (req, res) => {
  res.json({ msg: 'Working' });
};

const signUp = (req, res) => {
  res.json({ msg: 'Working', token: req.user });
};

const signIn = (req, res) => {
  res.json({ msg: 'Working', token: req.user });
};
const apis = {
  testApi,
  signUp,
  signIn,
};
export default apis;
