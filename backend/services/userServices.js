const userModels = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Creación de Usuario
const createUser = async(username, email, password, rol = 'user') => {

    if(!username || !email || !password) {
        return res.status(400).json({ message: "Faltan datos obligatorios para registrar usuario." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModels.createUser(username, email, hashedPassword, rol);
    return newUser
}

const logInServices = async(email, password) => {
    if(!email || !password) {
        throw new Error("Correo y Contraseña incorrectos");
    }

    const resultLogin = await userModels.loginModel(email, password);
    if(!resultLogin.rows[0]) {
        throw new Error("Usuario no encontrado");
    }

    const loginUser = resultLogin.rows[0];

    const validatePassword = await bcrypt.compare(password, loginUser.password);
    if(!validatePassword) {
        throw new Error("Credenciales incorrectas");
    }

    const token = jwt.sign(
        { userId: loginUser.user_id, email: loginUser.email, rol: loginUser.rol }, process.env.JWT_SECRET, { expiresIn: '1h' })

    return { token, loginUser }
}

module.exports = {
    createUser,
    logInServices
}