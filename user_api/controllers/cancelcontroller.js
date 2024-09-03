const { status, jsonStatus, messages } = require('../apiresponse');
const con = require('../connection');
async function cancel_reason(req, res) {
    const cancel_reason = req.body;

    try {
        con.query("INSERT INTO cancel_reason  SET ?", cancel_reason, (err, result) => {
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

module.exports=cancel_reason;
