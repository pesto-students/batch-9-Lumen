
import express from 'express';
import bodyParser from 'body-parser';

const app =  (

) => {
    let server = express(),
        create,
        start;

    create = (

    ) => {
        let routes = require('../routes');

        server.set('port', 3000);

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended: false
        }));

        routes.init(server);
    };

    
    start = () => {
        const port = server.get('port');

        server.listen(port, function () {
            console.log('Server listening on - http://' + hostname + ':' + port);
        });
    };
    return {
        create: create,
        start: start
    };
};

export default app;
