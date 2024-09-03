const express = require('express');
const router = express.Router();
const authController = require('../controllers/logoutcontroller');
router.get('/find-by-username/:admin_id', authController.findByUsername);

module.exports = router;