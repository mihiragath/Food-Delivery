const itemModel = require('../models/itemoperation');
const con = require('../connection');
async function getallcontact(res) {


    try {
        await con.query("SELECT * FROM contact_us  " ,(err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('An error occurred while fetching contact_us');
            } else {
                res.send(result);
                console.log(result);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching contact_usdetails');
    }

}
module.exports = getallcontact;