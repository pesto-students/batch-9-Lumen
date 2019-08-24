import {
  signUp as validateSignup,
  signIn as validateSignIn,
  isEmpty
} from '../utils/validations';
import { decodeToken } from '../utils/tokenization';
import logger from '../utils/logger';

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

export { signUpFieldsValid, signInFieldsValid, attachUserIfExists };
