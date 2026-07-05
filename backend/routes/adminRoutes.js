const express = require('express');
const router = express.Router();
const productControllers = require("../controllers/productControllers");
const verifyToken = require("../middlewares/verifyToken");
const verifyRol = require("../middlewares/verifyRol");

// http://localhost:3000/api/admin/add-product -> Crear Producto - Administrador
router.post('/add-product', verifyToken, verifyRol, productControllers.createProduct);

// http://localhost:3000/api/admin/product/2 -> Eliminar Producto - Administrador
router.delete('/del-product/:product_id', verifyToken, verifyRol,productControllers.deleteProduct);

module.exports = router;