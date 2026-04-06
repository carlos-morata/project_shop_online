const pool = require("../config/db_sql");
const queries = require("../queries/cartQueries");

// Añadir productos al carrito
const addProductToCartModel = async (user_id, product_id, quantity, size) => {
    try {
        const resultCart = await pool.query(queries.addProductToCart, [ user_id, product_id, quantity, size ]);
        return resultCart.rows;
    } catch (error) {
        throw error;
    }
}

// Leer productos en el carrito
const getProductsCartModel = async (user_id) => {
    try {
        const resultProductsCart = await pool.query(queries.getProductsCart, [ user_id ]);
        return { rows: resultProductsCart.rows, rowCount: resultProductsCart.rowCount };
    } catch (error) {
        throw error;
    }
}

// Incrementar o decrementar cantidad de producto en carrito
const updateQuantityModel = async(quantity, user_id, product_id, size) => {
    try {
        const resultUpdateQuantity = await pool.query(queries.updateQuantity, [ quantity, user_id, product_id, size ]);
        return resultUpdateQuantity.rows;
    } catch (error) {
        throw error;
    }
}

// Eliminar producto del carrito
const deleteProductCartModel = async (cart_id) => {
    try {
        const resultDelete = await pool.query(queries.deleteProductCart, [ cart_id ])
        return resultDelete.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addProductToCartModel,
    getProductsCartModel,
    updateQuantityModel,
    deleteProductCartModel
}