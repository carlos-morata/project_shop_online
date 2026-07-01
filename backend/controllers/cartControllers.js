const cartModels = require("../models/cartModels");
const cartServices = require("../services/cartServices");

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

// - / + Cantidad del carrito
const updateQuantity = async(req, res) => {
    const user_id = req.user.userId;
    const { quantity, product_id, size } = req.body;

    try {
        const resultUpdateQuantity = await cartModels.updateQuantityModel(quantity, user_id, product_id, size);

        res.status(200).json({
            success: true,
            data: resultUpdateQuantity
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
}

// Borrar producto del carrito
const deleteProductCart = async (req, res) => {
    const { cart_id } = req.params;

    try {
        await cartServices.deleteProductCartServices(cart_id);
        res.status(204).send();
    } catch (error) {
        console.error(error);

        if(error.message === 'Error al borrar producto del carrito') {
            res.status(404).json({ success: false, message: "Item no existe" }); 
        } else {
            res.status(500).json({ success: false, message: "Error interno del servidor" });
        }
    }
}

module.exports = {
    addProductToCart,
    getProductsCart,
    updateQuantity,
    deleteProductCart
}