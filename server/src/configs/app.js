import bodyParser from 'body-parser';
import express from 'express';
import routes from '../routes';
import logger from '../utils/logger';
import authInstance from './authentication';
import env from './env';

const app = (

) => {
  const server = express();

  const create = (

  ) => {
    server.set('port', env.port);

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
      extended: false,
    }));

    server.use(authInstance.initialize());
    authInstance.start();

    routes.init(server);
  };

  const start = () => {
    const port = server.get('port');

    server.listen(port, () => {
      logger.debug(`Server listening on - port number:${port}`);
    });
  };
  return {
    create,
    start,
  };
};

export default app;
