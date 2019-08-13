const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = () => {
  passport.use('signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      // TODO: Checks for sign up
      const user = { email };
      return done(null, user);
    },
  ));
};


const passportFunctions = {
  init,
  passport,
};

export default passportFunctions;
