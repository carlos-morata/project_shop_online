const express = require('express');
const router = express.Router();
const productControllers = require("../controllers/productControllers");

// http://localhost:3000/api/product -> Crear Producto - Administrador
router.post('/api/product', productControllers.createProduct);

// http://localhost:3000/api/product/2 -> Eliminar Producto - Administrador
router.delete('/api/product/:product_id', productControllers.deleteProduct);

// http://localhost:3000/api/products
router.get('/', productControllers.getProducts);

// http://localhost:3000/productos/buscar?query=camiseta
router.get('/buscar', productControllers.searchProducts);

// http://localhost:3000/genero/mujer
router.get('/genero/:gender', productControllers.getByGender);

// http://localhost:3000/categorias/mujer
// http://localhost:3000/categorias/hombre
router.get('/categorias/:gender', productControllers.getCategoriesByGender);

// http://localhost:3000/mujer/abrigos
router.get('/genero/:gender/categoria/:category', productControllers.getProductsByGenAndCat);

// http://localhost:3000/mujer/abrigos/2
router.get('/genero/:gender/categoria/:category/:product_id', productControllers.getProductById);


module.exports = router;