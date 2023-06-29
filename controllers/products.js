exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/add-products' });
  };


  (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
  };