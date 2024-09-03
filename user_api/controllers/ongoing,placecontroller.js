const itemModel = require('../models/user_order');
const con = require('../connection');

async function pastOrder(req, res) {
    const order = req.params.id;

    try {
        con.query("SELECT * FROM user_order WHERE id = ?", order, (err, result) => {
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
module.exports = pastOrder;