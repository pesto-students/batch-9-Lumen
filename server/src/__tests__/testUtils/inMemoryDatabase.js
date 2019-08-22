import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import logger from '../../utils/logger';


let mongoServer;
const createConnection = async function createConnection() {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoReconnect: true,
    reconnectTries: 10,
    reconnectInterval: 1000,
    poolSize: 10,
    useFindAndModify: false,
    useCreateIndex: true,
  }, (err) => {
    if (err) {
      logger.error(err);
    }
  });
};

const closeConnection = async function closeConnection() {
  await mongoose.disconnect();
  await mongoServer.stop();
};

const cleanup = async function cleanup() {
  const collections = await mongoose.connection.db.listCollections().toArray();
  return Promise.all(
    collections
      .map(({ name }) => name)
      .map((collection) => mongoose.connection.db.collection(collection).drop()),
  );
};

export default {
  createConnection,
  closeConnection,
  cleanup,
};
