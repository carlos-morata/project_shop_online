const userServices = require('../services/userServices');

// Registro de Usuarios
const createUser = async(req, res) => {
    try {
        const { username, email, password, rol = 'user' } = req.body;
        const newUser = await userServices.createUser(username, email, password, rol);

        console.log("USUARIO REGISTRADO", newUser);
        res.status(201).json({ message: "Usuario Registrado!", user: newUser });
        
    } catch(error) {
       res.status(500).json({ message: "Error en el servidor", error});
    }
}

// Inicio de Sesión Usuarios
const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const loginUser = await userServices.logInServices(email, password);
        res.status(200).json({ message: "Inicio de Sesión realizado con éxito!", user: loginUser });
    } catch(error) {
       res.status(500).json({ message: "Error en el servidor", error});
    }
}

// Cierre de Sesión Usuarios
const logout = async(req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({ message: "Email y Password incompletos" });
        }
        const logoutUser = await userModels.logoutModel(email, password);
        res.status(201).json({ message: "Has cerrado sesión con éxito!", user: logoutUser });
    } catch(error) {
       res.status(500).json({ message: "Error en el servidor", error});
    }
}

module.exports = {
    createUser,
    login,
    logout
}