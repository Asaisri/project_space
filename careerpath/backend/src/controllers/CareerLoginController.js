const CareerLogin = require('../models/CareerLogin');

exports.careerlogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await CareeerLogin.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (password !== user.password) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await CareerLogin.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = new CareerLogin({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}