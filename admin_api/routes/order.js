// Inside your route file (e.g., orderdetailroute.js)
const express = require('express');
const router = express.Router();
const orderdetail = require('../controllers/orderconrtroller');

router.get('/orderdetail/:id', async (req, res, next) => {
    try {
        await orderdetail(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching order details');
    }
});

module.exports = router;
