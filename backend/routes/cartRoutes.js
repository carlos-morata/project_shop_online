const express = require('express');
const router = express.Router();
const cartControllers = require("../controllers/cartControllers");
const verifyToken = require("../middlewares/verifytoken");

router.post('/add-product', verifyToken ,cartControllers.addProductToCart);

router.get('/', verifyToken, cartControllers.getProductsCart);

router.put('/update-quantity', verifyToken, cartControllers.updateQuantity);

router.delete('/:cart_id', cartControllers.deleteProductCart);


module.exports = router;