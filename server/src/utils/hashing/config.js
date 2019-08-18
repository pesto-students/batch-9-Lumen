const configs = {
  saltRounds: parseInt(process.env.SALT_ROUNDS || '1', 10),
};

Object.freeze(configs);
export default configs;
