const queries = {
    // Añadir pedido
    addOrder:
    ` INSERT INTO orders(user_id, total_price, state)
        VALUES($1, $2, $3)
        RETURNING order_id;`,
    
    // Añadir items del pedido
    addOrderItems:
    ` INSERT INTO order_items(order_id, product_id, quantity, price)
        VALUES($1, $2, $3, $4)
        RETURNING *;`
    
}

module.exports = queries;