
const tokenConfig = {
  secret: process.env.TOKEN_SECRET || 'test',
  signingAlgorithm: process.env.TOKEN_ALGORITHM || 'HS256',
  expireTokenIn: '12h',
};

export default Object.freeze(tokenConfig);
