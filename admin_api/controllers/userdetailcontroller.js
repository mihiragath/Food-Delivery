const itemModel = require('../models/user'); // Make sure to import the correct itemModel
const con = require('../connection');

async function getuserdetails(req, res) {
    const data = req.params.User_id;

    try {
        con.query("SELECT * FROM user WHERE User_id = ?", data, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('An error occurred while fetching items');
            } else {
                res.send(result);
                console.log(result);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching items');
    }

}
module.exports = getuserdetails;

