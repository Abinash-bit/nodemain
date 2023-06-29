const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

const products = [];


router.get('/add-products', productsController.getAddProduct);

  router.post('/products', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
  });

exports.routes = router;
exports.products = products;