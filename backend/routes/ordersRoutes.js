const express = require('express');
const router = express.Router();
const ordersControllers = require("../controllers/ordersControllers");
const verifyToken = require("../middlewares/verifytoken");

// http://localhost:3000/api/order/add -> Crear pedido
router.post('/add', verifyToken, ordersControllers.addOrder);

// http://localhost:3000/api/order/ -> Ver pedidos
router.get('/', verifyToken, ordersControllers.viewUserOrders);

// http://localhost:3000/api/order/1 -> Ver pedido específico
router.get('/:order_id', verifyToken, ordersControllers.viewUserOrderId);

module.exports = router;