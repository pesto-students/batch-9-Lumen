
import bodyParser from 'body-parser';
import routes from '../routes';
import passport from './passport';

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

    server.use(passport.passport.initialize());

    passport.init();

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
