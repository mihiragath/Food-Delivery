// Middleware function to validate login

const loginMiddleware = (req, res, next) => {
    // Your login validation logic here
    // For example:
    if (req.body.Email === 'validUser' && req.body.password === 'validPassword') {
      next(); // Move to the next middleware or route handler
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  module.exports = {
    loginMiddleware
  
};  