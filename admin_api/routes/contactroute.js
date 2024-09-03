const express = require('express');
const router = express.Router();
const getallcontact = require('../controllers/contactcontrolller');

router.get('/contactlist', (req, res, next) => {
    try {
        // Call the controller function to fetch order data
        getallcontact(res);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while handling the order list request');
    }
});

module.exports = router;
