// userRoutes.js
const express = require('express');
const router = express.Router();
const updatedController = require('../controllers/updatedeleteusecontrollerr');


router.put('/users/:id',updatedController .updateUser);
router.delete('/users/:id', updatedController.deleteUser);

module.exports = router;
