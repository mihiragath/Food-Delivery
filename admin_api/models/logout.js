const connection = require('../connection');

class UserModel {
  static findByUsername(admin_id, callback) {
    const query = 'SELECT * FROM admin_user WHERE admin_id = ?';
    connection.query(query, [admin_id], callback);
  }
}

module.exports = UserModel;
