const constants = {
  serverURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  userRoute: '/api/v1/users',
  blogRoute: '/api/v1/blogs',
  categoriesRoute: '/api/v1/categories',
  votesRoute: '/api/v1/votes',
};

Object.freeze(constants);

export default constants;
