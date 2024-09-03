const { status, jsonStatus, messages } = require('../apiresponse');
const con = require('../connection');
async function contactus(req, res) {
    const contactus = req.body;

    try {
        con.query("INSERT INTO contact_us  SET ?", contactus, (err, result) => {
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

module.exports = contactus;
