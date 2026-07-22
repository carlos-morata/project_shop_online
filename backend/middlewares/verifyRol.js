const verifyRol = (req, res, next) => {
    try {
        if(req.user.rol === "admin") return next();
            else return res.status(403).json({success: false, message: "Acceso Denegado."});
    } catch (error) {
        return res.status(401).json({ success: false, message: "Acceso Denegado. No tienes estos permisos habilitados." });
    }
}

module.exports = verifyRol;