const express = require('express');
const login = express.Router();
const registercon = require('../controllers/admincontrollers');
const loginvalidator = require('../validator/adminvalidator');

login.post('/register', loginvalidator, registercon );

module.exports = login;
