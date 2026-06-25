const express = require('express');
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const verifyToken = require("../middlewares/verifytoken");

// [POST] http://localhost:3000/api/signup -> Registrar Usuario
router.post('/signup', userControllers.createUser);

// [POST] http://localhost:3000/api/login -> Inicio de Sesión Usuario
router.post('/login', userControllers.login);

// [POST] http://localhost:3000/api/logout -> Cierre de Sesión Usuario
router.post('/logout', userControllers.logout);

// http://localhost:3000/api/user/ -> Leer Datos de Usuario
router.get('/', verifyToken ,userControllers.readUserData);

module.exports = router;