const express = require('express');
const past = express.Router();
const pastOrder = require('../controllers/ongoing,placecontroller');

past.get('/past/:id', pastOrder);

module.exports=past;