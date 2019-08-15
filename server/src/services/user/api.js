
const health = (req, res) => {
  res.status(200);
  res.json({ status: 'Ok' });
};

const signUp = (req, res) => {
  res.status(200);
  res.json({ msg: 'success', token: req.user });
};

const signIn = (req, res) => {
  res.status(200);
  res.json({ msg: 'success', token: req.user });
};

const apis = {
  health,
  signUp,
  signIn,
};
export default apis;
