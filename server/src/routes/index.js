
import restRoutes from './rest';
import shareViews from '../controller/views/share';

const init = (server) => {
  server.get('*', (req, res, next) => {
    console.log(`Request received for ${req.originalUrl}`);
    return next();
  });

  server.use('/api', restRoutes);
  server.use('/share', shareViews);

};
const routes = {
  init,
};

export default routes;
