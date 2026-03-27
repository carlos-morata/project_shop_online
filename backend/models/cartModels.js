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
const getProductsCart = async (user_id) => {
    try {
        const resultProductsCart = await pool.query(queries.getProductsCart, [ user_id ]);
        return resultProductsCart.rows
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addProductToCartModel,
    getProductsCart
}