const User = require('../models/User'); // Import your User model

const isAuthenticated = async (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.redirect('/login'); // Redirect to login if not logged in
  }

  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.redirect('/login'); // User ID not valid, redirect to login
    }
    req.user = user; // Optional: attach user object to request for further use
    next(); // Allow to proceed
  } catch (error) {
    console.error('Error in authMiddleware:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = isAuthenticated;
