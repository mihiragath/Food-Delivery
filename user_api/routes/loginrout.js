const express = require('express');
const login = express.Router();
const registercon = require('../controllers/authcontrollers');
const loginvalidator = require('../validator/authvalidator');

login.post('/register', loginvalidator, (req, resp) => {
  // Call the registration controller function
  registercon(req, resp);
});

module.exports = login;
