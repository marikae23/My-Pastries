const User = require('../models/User');

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send(user);
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.send(user);
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
};
