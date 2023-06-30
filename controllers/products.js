const products = [];

export function getAddProduct(req, res, next) {
  res.render('add-product', { pageTitle: 'Add Product', path: '/add-products' });
}

export function postAddProduct(req, res, next) {
  products.push({ title: req.body.title });
  res.redirect('/');
}

export function getShop(req, res, next) {
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
}

  