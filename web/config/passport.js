var LocalStrategy = require('passport-local').Strategy;
const db = require('../db/index.js');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      function(req, username, password, done) {
        process.nextTick(function() {
          db.findByUsername(username, function(err, data) {
            if (err) return done(err);
            if (data.rowCount) {
              return done(
                null,
                false,
                req.flash('signupMessage', 'That username is already taken.')
              );
            } else {
              db.signup(username, password, function(err, success) {
                if (err) {
                  throw err;
                }
                if (success) {
                  db.findByUsername(username, (err, user) => {
                    if (err) throw err;
                    console.log(user.rows[0]);
                    return done(null, user.rows[0]);
                  });
                }
              });
            }
          });
        });
      }
    )
  );

  passport.use(
    'local-login',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      function(req, username, password, done) {
        db.findByUsername(username, function(err, data) {
          if (err) return done(err);
          if (!data.rowCount) {
            console.log('user not found');
            return done(
              null,
              false,
              req.flash('loginMessage', 'No user found.')
            );
          }

          let user = data.rows[0];
          if (user.password !== password) {
            console.log('wrong password');
            return done(
              null,
              false,
              req.flash('loginMessage', 'Oops! Wrong password.')
            );
          }

          console.log('user found - password is good');
          return done(null, user);
        });
      }
    )
  );
};
