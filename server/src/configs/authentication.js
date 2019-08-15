import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as AuthorizeStrategy } from 'passport-http-bearer';

import { tokenizeObject, decodeToken } from '../utils/tokenization';

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
    },
    async (email, password, done) => {
      // TODO: Checks for sign up (Waiting for Data models to be added)
      /**
       * Steps for sign up.
       * 1.check if the user already exists in the database and return error in done callback.
       * 2. If user does not exists,
       *        -create a user in the database and return the created user object.
       */

      const user = { email };
      return done(null, user);
    },
  ));

  passport.use('local-signin', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      // TODO: Checks for sign in (Waiting for Data models to be added)
      /**
       * Steps for sign in.
       * 1.check if the user already exists in the database and return error in done callback.
       * 2. If user does not exists,
       *        -create a user in the database and sign a token for the user and return token.
       */
      const user = tokenizeObject({ email });
      return done(null, user);
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
