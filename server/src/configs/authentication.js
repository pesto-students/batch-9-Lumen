import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as AuthorizeStrategy } from 'passport-http-bearer';

import { tokenizeObject, decodeToken } from '../utils/tokenization';
import {
  userExists,
  createUser,
  verifyPassword as verifyUserPassword,
  getUserProperties,
} from '../services/user/service';

function Authentication(

) {
  return this;
}

Authentication.prototype.start = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const userAlreadyExists = await userExists(email, req.body.username);

        if (userAlreadyExists) {
          return done(null, false, 'User already exists with same email/username.');
        }

        const user = await createUser(req.body);
        delete user.password;
        const token = tokenizeObject(user);
        return done(null, {token, user});
      } catch (e) {
        return done(e);
      }
    },
  ));

  passport.use('local-signin', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      const existingUser = await userExists(email);
      if (!existingUser) {
        return done(null, false, 'User does not exist .');
      }

      const validPassword = await verifyUserPassword(email, password);
      if (!validPassword) {
        return done(null, false, 'Invalid user password .');
      }

      const user = await getUserProperties(email);
      const token = tokenizeObject(user);
      return done(null, {token, user});
    },
  ));

  passport.use('user-valid', new AuthorizeStrategy(
    async (userToken, done) => {
      try {
        const decodedUser = decodeToken(userToken);
        done(null, decodedUser);
      } catch (err) {
        done(err);
      }
    },
  ));
};


Authentication.prototype.initialize = (...args) => passport.initialize(...args);

Authentication.prototype.authenticate = (...args) => passport.authenticate(...args);

Authentication.prototype.localSignIn = (...args) => passport.authenticate('local-signin', ...args);

Authentication.prototype.localSignUp = (...args) => passport.authenticate('local-signup', ...args);

Authentication.prototype.isValidUser = (...args) => passport.authenticate('user-valid', ...args);

const authInstance = new Authentication();
export default authInstance;
