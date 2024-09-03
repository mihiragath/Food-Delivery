// cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/addtocartcontroller');
const cartView = require('../view/cartView');

router.post('/add-to-cart', async (req, res) => {
  const { name, price } = req.body;
  try {
    const result = await cartController.addToCartController(name, price);
    res.send(result);
  } catch (error) {
    res.status(500).send('Error adding item to cart.');
  }
});

router.post('/remove-to-cart/:id', async (req, res) => {
  const { itemId } = req.params.id;
  try {
    const result = await cartController.removeFromCartController(itemId);
    res.send(result);
  } catch (error) {
    res.status(500).send('Error removing item from cart.');
  }
});

router.get('/list-cart', async (req, res) => {
    try {
      const cartItems = await cartController.getCartItemsController();
      cartView.renderCartItems(cartItems);
        res.status(200).json({ cartItems });
    } catch (error) {
      console.error('Error listing cart items:', error);
  
      res.status(500).json({ error: 'Error listing cart items.' });
    }
  });
  

module.exports=router;
