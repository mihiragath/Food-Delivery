const itemModel = require('../models/sub_category'); // Make sure to import the correct itemModel
const con = require('../connection');

async function getItemsByCategory(req, res) {
    const categoryId = req.params.Id;

    try {
        con.query("SELECT * FROM sub_category WHERE Id = ?", categoryId, (err, result) => {
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

async function getItemDetails(req, res) {
    const itemId = req.params.Id;

    try {
        con.query("SELECT * FROM product WHERE Id = ?", itemId, (err, result) => {
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

module.exports = {
    getItemsByCategory,
    getItemDetails
};
