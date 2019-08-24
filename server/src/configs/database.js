import mongoose from 'mongoose';
import logger from '../utils/logger';
import populateDefaults from '../constants/populateDefault';

let closeErrorCallback;

const connectDB = async uri => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: true,
      poolSize: 10,
      useFindAndModify: false
    });
    await populateDefaults();
    logger.debug('Successfully connected to database. ');
  } catch (error) {
    logger.error('Error in connecting the mongoose instance.');
    logger.error(error);
  }

  mongoose.connection.on('error', error => {
    logger.error('Error in connecting the mongoose instance.');
    logger.error(error);
  });

  mongoose.connection.on('connected', async () => {
    await populateDefaults();
    logger.debug('Successfully connected to database. ');
  });

  mongoose.connection.on('reconnectFailed', () => {
    logger.error('Retries to connect to mongoDB failed');
    if (typeof closeErrorCallback === 'function') {
      closeErrorCallback();
    }
  });

  mongoose.connection.on('disconnected', () => {
    logger.debug('The mongodb instance is disconnected');
  });
};

const closeDBConnections = callback => mongoose.connection.close(callback);

const connectionError = callback => {
  closeErrorCallback = callback;
};

const availableFunctions = {
  connectDB,
  closeDBConnections,
  connectionError
};
export default availableFunctions;
