const ordersModels = require("../models/ordersModels");
const { getUserOrders } = require("../queries/ordersQueries");
const ordersServices = require("../services/ordersServices");

// Crear pedido
const addOrder = async (req, res) => {
    const user_id  = req.user.userId;
    const { total_price, cartItems} = req.body;

    try {
        const resultAddOrder =await ordersServices.addOrdersService(user_id, total_price, cartItems);

        res.status(201).json({
            success: true,
            data: resultAddOrder
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
}

// Ver pedidos
const viewUserOrders = async (req, res) => {
    const user_id = req.user.userId;

    try {
        const resultViewOrders = await ordersServices.getUserOrdersServices(user_id);

        res.status(200).json({
            success: true,
            data: resultViewOrders
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
}

module.exports = {
    addOrder,
    viewUserOrders
}