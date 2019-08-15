
const tokenConfig = {
  secret: process.env.TOKEN_SECRET,
  signingAlgorithm: process.env.TOKEN_ALGORITHM,
  expireTokenIn: '12h',
};

export default Object.freeze(tokenConfig);
