const queries = {
    addProductToCart: 
    ` INSERT INTO cart (user_id, product_id, quantity, size)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (user_id, product_id, size)
        DO UPDATE SET quantity = cart.quantity + EXCLUDED.quantity
        RETURNING *;`,
    
    getProductsCart:
    ` SELECT
        c.quantity
        c.size
        p.product_id
        p.name
        p.price
        p.url_image
     FROM cart c
     JOIN products p ON c.product_id = p.product_id
     WHERE c.user_id = $1; `
}

module.exports = queries;