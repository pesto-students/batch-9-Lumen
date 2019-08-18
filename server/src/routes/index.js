
import path from 'path';
import restRoutes from './rest';

const init = (server) => {
  server.get('*', (req, res, next) => {
    console.log(`Request received for ${req.originalUrl}`);
    res.sendFile(path.resolve(__dirname, '../../../client/src/index.jsx'));
    next();
  });

  server.use('/api', restRoutes);
};
const routes = {
  init,
};

export default routes;
