const cartModels = require("../models/cartModels");

// Añadir producto al carrito
const addProductToCart = async (req, res) => {
    const user_id  = req.user.userId;
    const { product_id, quantity, size} = req.body;

    if(!product_id || !size) {
        return res.status(400).json({ 
            success: false, 
            message: "Faltan datos (producto o talla)." 
        });
    };

    try {
        const finalQuantity = quantity ? parseInt(quantity) : 1;
        const resultCart = await cartModels.addProductToCartModel(user_id, product_id, finalQuantity, size);

        res.status(201).json({
            success: true,
            message: "Producto añadido al carrito",
            data: resultCart[0]
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
}

// Leer productos del carrito
const getProductsCart = async (req, res) => {
    const user_id  = req.user.userId;

    try {
        const resultProductsCart = await cartModels.getProductsCartModel(user_id);

        res.status(200).json({
            success: true,
            data: resultProductsCart
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
}

module.exports = {
    addProductToCart,
    getProductsCart
}