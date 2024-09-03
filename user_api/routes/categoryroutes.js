const express = require('express');
const categoryRoutes = express.Router();
const categoryController = require('../controllers/categorycontroller');

categoryRoutes.get('/category', categoryController);

module.exports=categoryRoutes;