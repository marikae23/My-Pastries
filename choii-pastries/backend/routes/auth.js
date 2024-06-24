const express = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

module.exports = router;
