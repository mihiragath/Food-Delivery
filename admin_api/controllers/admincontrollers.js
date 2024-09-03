const bcrypt = require('bcrypt');
const con = require('../connection');
const { status, jsonStatus, messages } = require('../apiresponse');
const generateAuthKey = require('../auth');
//const user = require('../models/user');
const register = (req, resp) =>
 {
    const authKey = generateAuthKey();
    const adminData = {
        auth_key: authKey,
      };
      const data=req.body;
      const combinedData = {
        ...adminData,
        ...data
    };
    
      con.query('INSERT INTO admin_user SET ?', combinedData, (error,results) => {
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



module.exports = register;
