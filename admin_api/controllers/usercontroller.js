const itemModel = require('../models/itemoperation');
const con = require('../connection');
async function getalluser(res) {


    try {
        await con.query("SELECT * FROM user " ,(err, result) => {
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
        res.status(500).send('An error occurred while fetching item details');
    }

}
module.exports = getalluser;