const pool = require("../config/db_sql");
const queries = require("../queries/cartQueries");

const addProductToCartModel = async (user_id, product_id, quantity, size) => {
    try {
        const resultCart = await pool.query(queries.addProductToCart, [user_id, product_id, quantity, size]);
        return resultCart.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addProductToCartModel
}