const queries = {
    addProductToCart: 
    ` INSERT INTO cart (user_id, product_id, quantity, size)
        VALUES ($1, $2, $3, $4)
        ON CLONFLICT (user_id, product_id, size)
        DO UPDATE SET quantity = cart.quantity + EXCLUDED.quantity
        RETURNING *;`
}

module.exports = queries;