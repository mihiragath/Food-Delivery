const express = require('express');
const router = express.Router();
const getallorder = require('../controllers/orderlistcontroller');

router.get('/orderlist', (req, res, next) => {
    try {
        // Call the controller function to fetch order data
        getallorder(res);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while handling the order list request');
    }
});

module.exports = router;
