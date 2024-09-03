const connection = require('../connection');
class CartModel {
  
    addToCart(item) {
    const query = 'INSERT INTO cart_items (name, price) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [item.name, item.price], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  removeFromCart(itemId) {
    const query = 'DELETE FROM cart_items WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(query, [itemId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  getCartItems() {
    const query = 'SELECT * FROM cart_items';
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = new CartModel();
