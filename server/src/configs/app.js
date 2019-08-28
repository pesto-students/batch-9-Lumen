import bodyParser from 'body-parser';
import express from 'express';
import routes from '../routes';
import logger from '../utils/logger';
import authInstance from './authentication';
import env from './env';

const app = (

) => {
  const server = express();
  let application;
  const create = (

  ) => {
    server.set('port', env.port);

    server.set('view engine', 'ejs');

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
      extended: false,
    }));

    server.use(authInstance.initialize());
    server.use(setupCORS);
    authInstance.start();

    routes.init(server);
    return server;
  };

  const start = () => {
    const port = server.get('port');

    application = server.listen(port, () => {
      logger.debug(`Server listening on - port number:${port}`);
    });
  };

  const stop = () => {
    application.close(() => {
      logger.debug('Closing application safely');
      process.exit(0);
    });

    setTimeout(() => {
      logger.error('Error in closing application. Forcing shutdown.');
      process.exit(1);
    }, 10000);
  };

  const setupCORS = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('access-control-expose-headers', '*');
    next();
  };
  return {
    create,
    start,
    stop,
  };
};

export default app;
