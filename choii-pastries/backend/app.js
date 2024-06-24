const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const User = mongoose.model('User', {
  email: { type: String, unique: true },
  password: String,
});

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app.post('/api/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({ email: req.user.email }, 'your-secret-key');
  res.json({ token });
});

app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User created successfully.');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
