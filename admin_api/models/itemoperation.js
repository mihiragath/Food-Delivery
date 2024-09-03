const connection = require('../connection');
class CartModel {
  
    additems(item) {
    const query = 'INSERT INTO  product (Id, Name) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
      connection.query(query, [item.Id, item.Name], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  removeitems(itemId) {
    const query = 'DELETE FROM product WHERE id = ?';
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

   
    
        
    
    

}

module.exports = new CartModel();
