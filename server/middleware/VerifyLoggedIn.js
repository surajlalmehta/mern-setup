const jwt = require('jsonwebtoken');
const User = require('../models/user'); 

// middleware/verifyLoggedIn.js


const verifyLoggedIn = () => {
  return async (req, res, next) => {
    try {
      const token = req.cookies.jwt_token;

      if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(401).json({ success: false, message: 'Unauthorized: Invalid user' });
      }

      req.user = user; // Attach the user object to the request for later use
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }
  };
};

module.exports = verifyLoggedIn;
