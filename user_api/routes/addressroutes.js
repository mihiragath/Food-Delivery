const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addresscontrollers');

router.post('/address', addressController);

module.exports = router;
