const jsonwebtoken = require('jsonwebtoken');

const secret = 'test';

const tokenize = (obj) => jsonwebtoken.sign(
  obj,
  secret,
);

const decryptToken = (token) => jsonwebtoken.verify(
  token,
  secret,
);
const strategies = {
  tokenize,
  decryptToken,
};

export default strategies;
