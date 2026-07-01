const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Buscamos el token en las cabeceras de la petición
    const authHeader = req.headers['authorization'];

    // Lo dividimos y cogemos la segunda parte
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json({
            success: false, 
            message: "Acceso denegado. No hay token"});
    };

    try {
        // Desencriptamos el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Guardamos los datos desencriptados
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: "Token no válido o ha expirado." });
    }
}

module.exports = verifyToken;