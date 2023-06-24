const express = require('express');

const router = express.Router();

router.get('/add-products', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  });
  
  router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

module.exports = router;