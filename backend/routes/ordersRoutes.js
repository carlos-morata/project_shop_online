const express = require('express');
const router = express.Router();
const ordersControllers = require("../controllers/ordersControllers");
const verifyToken = require("../middlewares/verifytoken");

// Crear pedido
router.post('/add', verifyToken, ordersControllers.addOrder);

// Ver pedidos
router.get('/', verifyToken, ordersControllers.viewUserOrders);

module.exports = router;