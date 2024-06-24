const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const { Strategy: FacebookStrategy } = require('passport-facebook');
const { Strategy: TwitterStrategy } = require('passport-twitter');
const User = require('./models/User');
const authRoutes = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  callbackURL: 'http://localhost:5000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id }, (err, user) => {
    if (err) return done(err);
    if (user) return done(null, user);
    const newUser = new User({ googleId: profile.id });
    newUser.save((err) => {
      done(err, newUser);
    });
  });
}));

passport.use(new FacebookStrategy({
  clientID: 'FACEBOOK_APP_ID',
  clientSecret: 'FACEBOOK_APP_SECRET',
  callbackURL: 'http://localhost:5000/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ facebookId: profile.id }, (err, user) => {
    if (err) return done(err);
    if (user) return done(null, user);
    const newUser = new User({ facebookId: profile.id });
    newUser.save((err) => {
      done(err, newUser);
    });
  });
}));

passport.use(new TwitterStrategy({
  consumerKey: 'TWITTER_CONSUMER_KEY',
  consumerSecret: 'TWITTER_CONSUMER_SECRET',
  callbackURL: 'http://localhost:5000/auth/twitter/callback'
}, (token, tokenSecret, profile, done) => {
  User.findOne({ twitterId: profile.id }, (err, user) => {
    if (err) return done(err);
    if (user) return done(null, user);
    const newUser = new User({ twitterId: profile.id });
    newUser.save((err) => {
      done(err, newUser);
    });
  });
}));

app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
