// cartRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/add-item');
const cartView = require('../view/cartView');
const update=require('../controllers/updateitemcontroler');

router.post('/add-item', async (req, res) => {
  const { Id, Name } = req.body;
  try {
    const result = await itemController.additems(Id, Name);
    res.send(result);
  } catch (error) {
    res.status(500).send('Error adding product.');
  }
});

router.post('/remove-items/:Id', async (req, res) => {
  const { itemId } = req.params.Id;
  try {
    const result = await itemController.removeitems(itemId);
    res.send(result);
  } catch (error) {
    res.status(500).send('Error removing product.');
  }
});

router.put('/update/:Id',update)


  

module.exports=router;
