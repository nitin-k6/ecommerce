import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, userId: newUser._id, name: newUser.name });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

 const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, userId: user._id, name: user.name });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};




const getUsers = async (req, res) => {
  try {
    const userdata = await User.find();
    return res.status(200).json({ success: true, data: userdata });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


export default {login, signup, getUsers}