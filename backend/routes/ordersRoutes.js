const express = require('express');
const router = express.Router();
const ordersControllers = require("../controllers/ordersControllers");
const verifyToken = require("../middlewares/verifytoken");

// Crear pedido
router.post('/add', verifyToken, ordersControllers.addOrder);

module.exports = router;