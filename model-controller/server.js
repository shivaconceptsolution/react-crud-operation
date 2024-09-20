const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rentalservices', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const Product = require('./models/product');

// Controllers
const productController = require('./controllers/productController');

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.get('/products', productController.getAllProducts);
app.get('/products/:id', productController.getProductById);
app.post('/products', productController.createProduct);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});