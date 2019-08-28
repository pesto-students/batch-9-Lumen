const envConfig = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DB_URI || 'mongodb://localhost:27017/test',
  appViewUrl: process.env.APP_VIEW_URL || 'http://localhost:3000/'
};

export default Object.freeze(envConfig);
