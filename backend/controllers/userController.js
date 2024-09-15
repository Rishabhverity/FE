const User = require('../models/user');
const { setUser } = require('../service/auth');

// Register a user
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const user = await User.create({ name, email, password, role });
  if (user) {
    res.status(201).json({ _id: user._id, name: user.name, email: user.email, role: user.role });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  // Check if user exists and the role matches
  const user = await User.findOne({ email, role });
  
  if (user && user.password === password) {
    // If credentials are correct, generate JWT token
    const token = setUser(user);

    // Set JWT token in cookies
    res.cookie('token', token, {
      httpOnly: true, // Helps prevent XSS attacks
     // secure: process.env.NODE_ENV === 'production', // Only set secure cookies in production
      sameSite: 'strict', // Helps prevent CSRF attacks
    });

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } else {
    // If credentials are incorrect, send an error response
    return res.status(400).json({ message: 'Invalid credentials or role' });
  }
};

// Logout User
const logoutUser = (req, res) => {
  // Clear the cookie that contains the token
  res.clearCookie('token', {
    httpOnly: true,
   // secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  // Redirect or send a success message
  return res.json({ message: 'Logged out successfully' });
};

//check for authentication
const checkAuth = (req, res) => {
  res.json({ message: 'Authenticated', user: req.user });
};

module.exports = { registerUser, loginUser, logoutUser, checkAuth };
