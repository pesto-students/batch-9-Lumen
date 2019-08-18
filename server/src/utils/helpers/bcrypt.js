import bcrypt from 'bcrypt';

const hash = async (data, saltRounds) => {
  const hashedData = await bcrypt.hash(data, saltRounds);
  return hashedData;
};

const compare = async (data, hashedData) => {
  const areEqual = await bcrypt.compare(data, hashedData);
  return areEqual;
};

export {
  hash,
  compare,
};
