var passport = require('passport');
var IntercomStrategy = require('passport-intercom').Strategy;

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');

passport.use(new IntercomStrategy({
    clientID: config.intercom.clientID,
    clientSecret: config.intercom.clientSecret,
    callbackURL: config.intercom.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {

    var searchQuery = {
      someID: profile.id
    };

    var newUser = {
      name: profile.displayName,
      someID: profile.id,
      accessToken: accessToken,
      imageUrl: profile.photos[0],
      email: profile.emails[0].value
    };

    // update the user if s/he exists or add a new user
    User.findOrCreate(searchQuery, newUser, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();


module.exports = passport;
