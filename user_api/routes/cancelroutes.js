const express = require('express');
const cancel = express.Router();
const cancel_reason = require('../controllers/cancelcontroller');

cancel.post('/cancel', cancel_reason);

module.exports = cancel;
