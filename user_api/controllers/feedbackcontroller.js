const { status, jsonStatus, messages } = require('../apiresponse');
const con = require('../connection');
async function sendFeedback(req, res) {
    const feedbackData = req.body;

    try {
        con.query("INSERT INTO feedback  SET ?", feedbackData, (err, result) => {
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

module.exports = sendFeedback;
