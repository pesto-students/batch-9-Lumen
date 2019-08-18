import app from './src/configs/app';
import database from './src/configs/database';
import env from './src/configs/env';

const liveApp = app();
const databaseUri = env.databaseUrl;

const shutdownApplication = () => {
  try {
    database.closeDBConnections(() => {
      liveApp.stop();
    });
  } catch (e) {
    liveApp.stop();
  }
};

liveApp.create();
liveApp.start();

database.connectDB(databaseUri);
database.connectionError(shutdownApplication);
process.on('SIGTERM', shutdownApplication);
process.on('SIGINT', shutdownApplication);
