const express = require("express");
const cors = require('cors');
require("dotenv").config();
const app = express();
const port = 3000;

require('./config/db_sql');
app.use(cors());
app.use(express.json());

// Importar Rutas de Usuarios
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Importar Rutas de Productos
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Importar Rutas de Carrito
const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);

// Importar Rutas de Pedidos
const orderRoutes = require('./routes/ordersRoutes');
app.use('/api/order', orderRoutes);

app.listen(port, () => {
  console.log(`Servidor backend -> http://localhost:${port}`)
})

module.exports = app;