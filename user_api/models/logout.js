const connection = require('../connection');

class UserModel {
  static findByUsername(User_id, callback) {
    const query = 'SELECT * FROM user WHERE User_id = ?';
    connection.query(query, [User_id], callback);
  }
}

module.exports = UserModel;
