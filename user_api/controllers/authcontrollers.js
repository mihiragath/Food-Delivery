const bcrypt = require('bcrypt');
const con = require('../connection');
const { status, jsonStatus, messages } = require('../apiresponse');
const generateAuthKey = require('../auth');
const user = require('../models/user');
const register = (req, resp) =>
 {
    const authKey = generateAuthKey();
    const userData = {
        auth_key: authKey,
      };
      const data=req.body;
      const combinedData = {
        ...userData,
        ...data
    };
    
      con.query('INSERT INTO user SET ?', combinedData, (error,results) => {
        if (error) {
          console.error(error);
          return resp.status(500).json({
            message: 'An error occurred while registering the user',
          });
        }else{
            resp.send(results);
            console.log(results);
        }
  });
 }

//  async function userLogout(req, res, next) {
//   try {
//     await user.destroy({ where: { auth_key: req.user.auth_key, user_id: req.user.id } });
//     return response(req, res, status.OK, jsonStatus.OK, 'logout_success');
//   } catch (error) {
//     return catchError('Auth.userLogout', error, req, res);
//   }
//   // Move the next() call here, after the try-catch blocks
//   next();
// }

module.exports = register;
