// userModel.js
const con = require('../connection');

class UserModel {
  

    async updateUser(userId, userData) {
        return new Promise((resolve, reject) => {
            con.query("UPDATE user SET ? WHERE User_id = ?", [userData, userId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    }

    async deleteUser(userId) {
        return new Promise((resolve, reject) => {
            con.query("DELETE FROM user WHERE User_id = ?", userId, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    }
}

module.exports = new UserModel();
