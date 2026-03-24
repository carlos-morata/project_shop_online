const express = require('express');
const router = express.Router();
const cartControllers = require("../controllers/cartControllers");

router.post('/add-product', cartControllers.addProductToCart);


module.exports = router;