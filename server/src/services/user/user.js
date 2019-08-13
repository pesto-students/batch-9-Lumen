
const testApi = (req, res) => {
  res.json({ msg: 'Working' });
};

const signUp = (req, res) => {
  res.json({ msg: 'Working' });
};

const apis = {
  testApi,
  signUp,
};
export default apis;
