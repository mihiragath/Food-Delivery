const addressModel = require('../models/user');
const con = require('../connection')
const { status, jsonStatus, messages } = require('../apiresponse');

async function addUserAddress(req, res) {
    const addressData = req.body;

    try {
        con.query("INSERT INTO address SET ?", addressData, (err, result) => {
            if (err) {
                console.error(err);
            }
            else{
                res.send(result);
                console.log(result);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = addUserAddress;
