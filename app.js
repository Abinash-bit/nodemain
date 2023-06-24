
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

app.use('/add-products', (req, res, next) => {
  console.log('In the middleware!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/',(req, res, next) => {
  
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
