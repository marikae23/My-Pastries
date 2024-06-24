const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  facebookId: String,
  twitterId: String
});

module.exports = mongoose.model('User', UserSchema);
