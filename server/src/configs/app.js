import bodyParser from 'body-parser';
import express from 'express';
import routes from '../routes';
import logger from '../utils/logger';

const app = (

) => {
  const server = express();

  const create = (

  ) => {
    const portToUse = process.env.APP_PORT;
    server.set('port', portToUse);

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
      extended: false,
    }));

    routes.init(server);
  };


  const start = () => {
    const port = server.get('port');

    server.listen(port, () => {
      logger.debug(`Server listening on - port:${port}`);
    });
  };
  return {
    create,
    start,
  };
};

export default app;
