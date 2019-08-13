
import bodyParser from 'body-parser';
import routes from '../routes';

const express = require('express');

const app = (

) => {
  const server = express();

  const create = (

  ) => {
    server.set('port', 3000);

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
      extended: false,
    }));

    routes.init(server);
  };


  const start = () => {
    const port = server.get('port');

    server.listen(port, () => {
      console.log(`Server listening on - port:${port}`);
    });
  };
  return {
    create,
    start,
  };
};

export default app;
