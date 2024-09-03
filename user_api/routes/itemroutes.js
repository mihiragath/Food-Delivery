const express = require('express');
const item = express.Router();
const itemController = require('../controllers/itemcontroller');

item.get('/items/category/:Id', itemController.getItemsByCategory);
item.get('/item/:Id', itemController.getItemDetails);

module.exports = item;
