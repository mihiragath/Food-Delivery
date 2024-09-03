const express = require('express');
const router = express.Router();
const userdetailcontroller = require('../controllers/userdetailcontroller');

router.get('/user/:User_id', userdetailcontroller);

module.exports = router;
