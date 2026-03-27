const express = require('express');
const router = express.Router();
const cartControllers = require("../controllers/cartControllers");
const verifyToken = require("../middlewares/verifytoken");

router.post('/add-product', verifyToken ,cartControllers.addProductToCart);

router.get('/', verifyToken, cartControllers.getProductsCart);


module.exports = router;