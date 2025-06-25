const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const products = require('./data/products');


app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get('/', (req, res) => {
  res.render('index')
})

app.get('/products', (req, res) => {
  if(!products){
    return res.status(404).send("No Products Available")
  }

  res.render('products', {products})
})

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);  
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.render('product', { product });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
