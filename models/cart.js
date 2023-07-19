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
        fs.readFile(p, (err, fileContent) =>{
            let cart = {products: [], totalPrice: 0}
            if(!err) {
                cart = JSON.parse(fileContent);
            }
            // Analyze the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const 
            let updatedProduct;
        // Add new product/ increase
            if(existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;

            } else {
                updatedProduct = { id: id, qty: 1};
                cart.products = [ ...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + productPrice;
            

        });
        

        // Add new product/ increase

    }

}