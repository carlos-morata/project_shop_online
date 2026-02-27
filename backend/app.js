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
app.use('/', userRoutes);

// Importar Rutas de Productos
const productRoutes = require('./routes/productRoutes');
app.use('/', productRoutes);

// Importar Rutas de Carrito
const cartRoutes = require('./routes/cartRoutes');
app.use('/', cartRoutes);

app.listen(port, () => {
  console.log(`Servidor backend -> http://localhost:${port}`)
})

module.exports = app;