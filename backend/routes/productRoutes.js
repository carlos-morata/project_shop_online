const express = require('express');
const router = express.Router();
const productControllers = require("../controllers/productControllers");

// http://localhost:3000/api/products
router.get('/', productControllers.getProducts);

// http://localhost:3000/productos/buscar?query=camiseta
router.get('/buscar', productControllers.searchProducts);

// http://localhost:3000/mujer/abrigos/2
router.get('/:gender/:category/:product_id', productControllers.getProductById);


module.exports = router;