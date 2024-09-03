// cartView.js
class CartView {
    renderCartItems(cartItems) {
      console.log('Cart Items:');
      cartItems.forEach(item => {
        console.log(`- Name: ${item.name}, Price: $${item.price}`);
      });
    }
  }
  
  module.exports = new CartView();
  