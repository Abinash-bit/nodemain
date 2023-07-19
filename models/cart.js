const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    static addProduct(id) {
        // Fetch the previous cart
        // Analyze the cart => Find existing product
        // Add new product/ increase

    }

}