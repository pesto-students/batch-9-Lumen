const envConfig = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DB_URI || 'mongodb://localhost:27017/test',
};

export default Object.freeze(envConfig);
