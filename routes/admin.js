const path = require('path');
const express = require('express');

const router = express.Router();

const products = [];


router.get('/add-products', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/add-products'});
  });

  router.post('/products', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
  });

exports.routes = router;
exports.products = products;