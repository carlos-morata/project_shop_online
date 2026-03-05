const queries = {
    // Crear Producto
    insertProduct: 
        ` INSERT INTO products (url_image, name, price, description, sizes, category, gender, stock)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
            
    // Eliminar Producto 
    deleteProduct:
        ` DELETE FROM products
            WHERE product_id = $1;`,

    // Leer Productos + categoría
        getProducts:
            ` SELECT * FROM products
                WHERE ($1::text IS NULL OR gender::text = LOWER($1))
                    AND ($2::text IS NULL OR LOWER(category) = LOWER($2))
                ORDER BY product_id ASC
                LIMIT $3
                OFFSET $4;`,
    
    // Cantidad total de Productos
        countProductsQuery:
            `SELECT COUNT(*) AS total
                FROM products
                WHERE ($1::text IS NULL OR gender::text = LOWER($1))
                    AND ($2::text IS NULL OR LOWER(category) = LOWER($2));`,
    
    // Leer un Producto por ID
    getProductsById:
        ` SELECT * FROM products
            WHERE gender = $1 AND LOWER(category) = $2 AND product_id = $3;` ,
    
    // Buscar Productos
    searchProducts:
        ` SELECT * FROM products
            WHERE name ILIKE '%' || $1 || '%';`,
}

module.exports = queries;