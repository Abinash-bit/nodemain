const fs = require('fs');
const path = require('path');
module.exports = class Product {
    constructor(title) {
        this.title = t;
    }
    save() {
        products.push(this);

    }
    fetchAll() {
        return products;
    }
}