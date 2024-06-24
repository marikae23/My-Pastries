const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

exports.signup = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuário criado com sucesso.' });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado.' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
