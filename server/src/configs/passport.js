import tokenization from '../utils/external/tokenization'

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = () => {
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
      // TODO: Checks for sign up
      const user = tokenization.tokenize({ email });
      return done(null, user);
    },
  ));

  passport.use('local-signin', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      // TODO: Checks for signin
      const user = tokenization.tokenize({ email });
      return done(null, user);
    },
  ));
};


const passportFunctions = {
  init,
  passport,
};

export default passportFunctions;
