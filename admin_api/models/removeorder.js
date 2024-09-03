const con = require('../connection');
// const UserModel = require('./logout');


  class UserModel {
  
async deleteorder(id) {
    return new Promise((resolve, reject) => {
        con.query("DELETE FROM user_order WHERE id = ?", id, (err, result) => {
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
