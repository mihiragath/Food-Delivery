const bcrypt = require('bcrypt');
const con = require('../connection');
const { status, jsonStatus, messages } = require('../apiresponse');

async function profilecontroller(req, resp) {
    const data = req.body;

    con.query("INSERT INTO user SET ?", [data], (err, result) => {
        if (err) {
            console.error('Error executing INSERT query:', err);
            resp.status(500).json({ error: 'An error occurred while setting the profile.' });
          } else {
            console.log('Profile set successfully');
            resp.status(200).json({ message: 'Profile set successfully' });
          }
      //     resp.status(201).send(jsonStatus(status.success, responseData));
    });
}

module.exports = {
    profilecontroller
};