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
        o.order_id,
        o.total_price,
        o.state,
        o.created_date,
        JSON_AGG(JSON_BUILD_OBJECT(
            'product_id', i.product_id,
            'name', p.name,
            'url_image', p.url_image
            )) AS products
      FROM orders o
      JOIN order_items i ON o.order_id = i.order_id
      JOIN products p ON i.product_id = p.product_id
      LEFT JOIN discounts d ON o.discount_id = d.discount_id
      WHERE o.user_id = $1
      GROUP BY o.order_id;`,

    // Mostrar pedido por id de usuario
    getUserOrderId:
    ` SELECT
        o.state,
        o.total_price,
        JSON_AGG(JSON_BUILD_OBJECT(
            'product_id', i.product_id,
            'name', p.name,
            'url_image', p.url_image,
            'price', p.price,
            'quantity', i.quantity
            )) AS products
        FROM orders o
        JOIN order_items i ON o.order_id = i.order_id
        JOIN products p ON i.product_id = p.product_id
        WHERE o.user_id = $1 AND o.order_id = $2
        GROUP BY o.order_id;
    `
}

module.exports = queries;