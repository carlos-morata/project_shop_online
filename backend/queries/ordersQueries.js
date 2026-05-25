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
        RETURNING *;`,

    // Mostrar pedidos de usuario
    getUserOrders:
    ` SELECT 
        o.total_price,
        o.state,
        o.created_date,
        i.product_id,
        p.name,
        p.url_image,
        d.discount_id
      FROM orders o
      JOIN order_items i ON o.order_id = i.order_id
      JOIN products p ON i.product_id = p.product_id
      LEFT JOIN discounts d ON o.discount_id = d.discount_id
      WHERE o.user_id = $1;
    `
}

module.exports = queries;