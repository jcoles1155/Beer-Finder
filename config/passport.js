const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/User');

// console.log(process.env.GOOGLE_CLIENT_ID)

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ 'googleId': profile.id }, function(err, user) {
      console.log(profile);
        if (err) return cb(err);
        if (user) {
          return cb(null, user);
        } else {
          // we have a new user via OAuth!
          const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            photo: profile._json.picture,
            recipes: [{
              type: mongoose.Types.ObjectId,
              ref: 'Post'
            }],

          });
          newUser.save(function(err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });