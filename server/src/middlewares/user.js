import {
  signUp as validateSignup,
  signIn as validateSignIn,
  isEmpty,
  validateUpdateUser
} from '../utils/validations';
import { decodeToken } from '../utils/tokenization';
import logger from '../utils/logger';
import { getProfileByUsername } from '../services/user/service';

const signUpFieldsValid = async (req, res, next) => {
  const user = req.body;
  const userFieldsValidity = validateSignup(user);
  if (!userFieldsValidity.isValid) {
    res.status(400);
    return res.json(userFieldsValidity.errors);
  }
  return next();
};

const signInFieldsValid = async (req, res, next) => {
  const user = req.body;
  const userFieldsValidity = validateSignIn(user);
  if (!userFieldsValidity.isValid) {
    res.status(400);
    return res.json(userFieldsValidity.errors);
  }
  return next();
};

const attachUserIfExists = async (req, res, next) => {
  const userAuthToken = req.headers.authorization;

  if (!isEmpty(userAuthToken)) {
    try {
      const userToken = userAuthToken.split(' ')[1];
      const user = decodeToken(userToken);
      req.user = user;
    } catch (e) {
      logger.error(
        'Error while decoding token in the user auth token middleware.'
      );
      logger.error(e);
    }
  }
  next();
};
const updateProfileFieldsValid = async (req, res, next) => {
  const user = req.body;
  const userFieldsValidity = validateUpdateUser(user);
  if (!userFieldsValidity.isValid) {
    res.status(400);
    return res.json(userFieldsValidity.errors);
  }
  return next();
};

const checkAndAttachUserForUsername = async (req, res, next) => {
  const getId = true;
  const user = await getProfileByUsername(req.params.username, getId);
  if (isEmpty(user)) {
    return res.status(404).json({ msg: 'User not found' });
  }
  req.referenceUser = user;
  return next();
};
export {
  signUpFieldsValid,
  signInFieldsValid,
  attachUserIfExists,
  updateProfileFieldsValid,
  checkAndAttachUserForUsername
};
