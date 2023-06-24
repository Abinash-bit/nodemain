const express = require('express');

const router = express.Router();

router.get('/add-products', (req, res, next) => {
    
    res.send('<form action="/admin/add-products" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  });
  
  router.post('/add-products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

module.exports = router;