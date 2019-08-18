import { compare, hash } from '../helpers/bcrypt';
import config from './config';

const hashData = async (data) => {
  const hashedData = await hash(data, config.saltRounds);
  return hashedData;
};

const compareHashData = async (plainData, hashedData) => {
  const areEqual = await compare(plainData, hashedData);
  return areEqual;
};

export {
  hashData,
  compareHashData,
};
