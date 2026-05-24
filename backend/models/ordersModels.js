const pool = require("../config/db_sql");
const queries = require("../queries/ordersQueries");

// Añadir pedido
const addOrderModel = async (client, user_id, total_price, state) => {
        const resultAddOrder = await client.query(queries.addOrder, [ user_id, total_price, state ]);
        return resultAddOrder.rows[0];
}

// Añadir Items al pedido
const addOrderItemsModel = async (client, order_id, product_id, quantity, price) => {
        const resultAddItems = await client.query(queries.addOrderItems, [ order_id, product_id, quantity, price ]);
        return resultAddItems.rows[0];
}

// Ver pedidos usuario
const getUserOrdersModel = async(user_id) => {
        const resultGetOrders = await pool.query(queries.getUserOrders, [ user_id ]);
        return resultGetOrders.rows;
}

module.exports = {
    addOrderModel,
    addOrderItemsModel,
    getUserOrdersModel
}