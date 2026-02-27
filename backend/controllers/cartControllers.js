const cartModels = require("../models/cartModels");

const addProductToCart = async (req, res) => {
    const { user_id, product_id, quantity, size} = req.body;

    if(!user_id || !product_id || !size) {
        return res.status(400).json({ 
            success: false, 
            message: "Faltan datos (usuario, producto o talla)." 
        });
    };

    try {
        const resultCart = await cartModels.addProductToCartModel(user_id, product_id, quantity, size);

        res.status(201).json({
            succes: true,
            message: "Producto añadido al carrito",
            data: resultCart
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
}

module.exports = {
    addProductToCart
}