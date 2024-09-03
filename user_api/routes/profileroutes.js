const express = require('express');
const profileRoutes = express.Router();
const { profilecontroller } = require('../controllers/profilecontroller');
const { profilevalidator } = require('../validator/profilevalidator');

profileRoutes.post('/profile', profilevalidator, profilecontroller);

module.exports=profileRoutes;



