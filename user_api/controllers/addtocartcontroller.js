const cartModel = require('../models/cartitem');

class CartController {
  async addToCartController(name, price) {
    try {
      await cartModel.addToCart({ name, price });
      return 'Item added to cart.';
    } catch (error) {
      throw error;
    }
  }

  async removeFromCartController(itemId) {
    try {
      await cartModel.removeFromCart(itemId);
      return 'Item removed from cart.';
    } catch (error) {
      throw error;
    }
  }

  async getCartItemsController() {
    try {
      const cartItems = await cartModel.getCartItems();
      return cartItems;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CartController();
