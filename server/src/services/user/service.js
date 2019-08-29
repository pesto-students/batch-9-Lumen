import User from '../../models/user';
import { compareHashData, hashData } from '../../utils/hashing';

const userExists = async (email, username) => {
  const query = {
    $or: [{ email }]
  };
  if (username) {
    query.$or.push({ username });
  }
  const userCountForGivenData = await User.countDocuments(query);

  if (userCountForGivenData === 0) {
    return false;
  }
  return true;
};

const createUser = async userProperties => {
  const hashedPassword = await hashData(userProperties.password);
  Object.assign(userProperties, { password: hashedPassword });
  const newUserInstance = await User.create(userProperties);
  return newUserInstance.toObject();
};

const usernameExists = async username => {
  const query = {
    username
  };
  const userCountForGivenUsername = await User.countDocuments(query);

  if (userCountForGivenUsername === 0) {
    return false;
  }
  return true;
};

const verifyPassword = async (email, password) => {
  const query = {
    email
  };
  const projection = 'password';
  const user = await User.findOne(query, projection);
  const validPassword = await compareHashData(password, user.password);
  return validPassword;
};

const getUserProperties = async (email, id) => {
  const query = {
    email
  };
  if (id) {
    // eslint-disable-next-line no-underscore-dangle
    query._id = id;
  }
  const projection = 'email name username profileImage description';
  const user = await User.findOne(query, projection);
  return user.toObject();
};

const updateProfile = async (userId, update) => {
  await User.findByIdAndUpdate(userId, update, {new: true});
};

const getProfile = async userId => {
  const user = await User.findById(userId);
  return user;
};

const getProfileByUsername = async (username, getId) => {
  const query = {
    username
  };
  const user = await User.findOne(query)
    .select({
      _id: getId ? 1 : 0,
      username: 1,
      name: 1,
      description: 1,
      profileImage: 1,
      email: 1
    })
    .lean();
  return user;
};

export {
  userExists,
  createUser,
  usernameExists,
  verifyPassword,
  getUserProperties,
  updateProfile,
  getProfile,
  getProfileByUsername
};
