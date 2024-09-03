const cartModel = require('../models/itemoperation');
const item = require('../routes/itemroutes');

class CartController {
  async additems (Id, Name) {
    try {
      await cartModel.additems({ Id, Name });
      return 'Item added .';
    } catch (error) {
      throw error;
    }
  }

  async removeitems(itemId) {
    try {
      await cartModel.removeitems(itemId);
      return 'Item removed .';
    } catch (error) {
      throw error;
    }
  }



}

module.exports = new CartController();
