const itemModel = require('../models/sub_category'); // Make sure to import the correct itemModel
const con = require('../connection');

async function getItemsdetails(req, res) {
    const Id = req.params.Id;

    try {
        con.query("SELECT * FROM product WHERE Id = ?", Id, (err, result) => {
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

async function getallitems(req, res) {


    try {
        con.query("SELECT * FROM product " , (err, result) => {
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

module.exports ={
     getItemsdetails,
     getallitems};