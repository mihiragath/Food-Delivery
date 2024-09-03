const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackcontroller');

router.post('/feedback', feedbackController);

module.exports = router;
