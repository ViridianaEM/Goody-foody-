const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv://Alonso:PVet9LuR4xhVWbdU@cluster0.m51offi.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a la base de datos establecida');
}).catch((err) => {
  console.log('Error al conectar a la base de datos:', err);
});


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Definición del modelo de datos
const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number
});

// Rutas
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const { name, description, price } = req.body;

  const product = new Product({
    name,
    description,
    price
  });

  await product.save();

  res.json(product);
});

// Inicio del servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
