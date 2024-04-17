// server.js
import express from 'express';
import User from './models/User.js';
import bcrypt from 'bcryptjs';
import db from '../utils/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
await db.connectDb();

// Express middleware to parse JSON bodies
app.use(express.json());

// Sign-up route
app.post('/api/signup', async (req, res) => {
  try {
    const { name, lastName, email, phoneNumber, password } = req.body;

    // Create a new user
    const newUser = new User({ name, lastName, email, phoneNumber, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Sign-in route
app.post('/api/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Password is correct, user is authenticated
    res.json({ message: 'Signin successful' });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
