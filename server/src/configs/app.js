
const express = require('express');
import bodyParser from 'body-parser';
import routes from '../routes'
const app =  (

) => {
    let server = express(),
        create,
        start;

    create = (

    ) => {
        
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
            console.log('Server listening on - port:' + port);
        });
    };
    return {
        create: create,
        start: start
    };
};

export default app;
