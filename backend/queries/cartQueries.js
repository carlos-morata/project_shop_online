const queries = {
    addProductToCart: 
    ` INSERT INTO cart (user_id, product_id, quantity, size)
        VALUES ($1, $2, $3, $4);`
}

module.exports = queries;