const express = require('express');
const item = express.Router();
const itemController = require('../controllers/itemcontroller');

item.get('/items/product/:Id', itemController.getItemsdetails);
item.get('/item', itemController.getallitems);


module.exports = item;
