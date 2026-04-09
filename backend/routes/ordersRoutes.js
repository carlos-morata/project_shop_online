const express = require('express');
const router = express.Router();
const ordersControllers = require("../controllers/ordersControllers");
const verifyToken = require("../middlewares/verifytoken");

module.exports = router;