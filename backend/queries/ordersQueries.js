const queries = {
    addOrder:
    ` INSERT INTO orders (user_id, total_price, state)
        VALUES($1, $2, $3)
        RETURNING order_id;`,
}

module.exports = queries;