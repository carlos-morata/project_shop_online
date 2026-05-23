const pool = require("../config/db_sql");
const ordersModels = require("../models/ordersModels");
const productModels = require("../models/productModels");
const cartmodels = require("../models/cartModels");

// Crear pedido
const addOrdersService = async (user_id, total_price, cartItems) => {
    const client = await pool.connect();
    try {
        // Registrar operaciones sin confirmar
        await client.query('BEGIN')
        
        // Crear pedido y obtener order_id
        const order = await ordersModels.addOrderModel(client, user_id, total_price, 'pending');
        const order_id = order.order_id
    
        // Por cada producto del carrito
        for(const items of cartItems) {
            // Insertar en order_items
            const resultItemOrder = await ordersModels.addOrderItemsModel(client, order_id, items.product_id, items.quantity, items.price);

            // Actualizar stock
            const resultUpdateStock = await productModels.updateProductStockModel(client, items.quantity, items.product_id);
        }

        // Vaciar carrito del usuario
        const resultEmptyCart = await cartmodels.emptyUserCartModel(client, user_id);

        // Confirmar las operaciones / cambios
        await client.query('COMMIT');   
        return order;
    } catch(error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}

module.exports = {
    addOrdersService,
}