const UserModel = require('../models/logout');

class AuthController {
  findByUsername(req, res) {
    const User_id = req.params.User_id; // Assuming the parameter name in the route is "User_id"
    UserModel.findByUsername(User_id, (err, result) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.status(200).json(result);
      }
    });
  }
}

module.exports = new AuthController();
