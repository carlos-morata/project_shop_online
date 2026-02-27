const express = require('express');
const router = express.Router();
const cartControllers = require("../controllers/cartControllers");

router.post('/add', cartControllers.addProductToCart);


module.exports = router;