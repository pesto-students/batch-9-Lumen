import { signUp as validateSignup, signIn as validateSignIn } from '../utils/validations';

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

export {
  signUpFieldsValid,
  signInFieldsValid,
};
