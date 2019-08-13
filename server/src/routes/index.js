import restRoutes from './rest';

const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request received for ' + req.originalUrl);
        return next();
    });
    
    server.use('/api', restRoutes);
}
const routes = {
    init
}

export default routes;
