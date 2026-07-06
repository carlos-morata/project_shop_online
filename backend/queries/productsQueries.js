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

    // Categorías de Productos
        GetCategories: 
            `SELECT category, COUNT(*) AS total_products
                FROM products
                WHERE ($1::text IS NULL OR gender::text = LOWER($1))
                GROUP BY category
                ORDER BY category ASC`,
    
    // Leer un Producto por ID
    getProductsById:
        ` SELECT * FROM products
            WHERE gender = $1 AND LOWER(category) = $2 AND product_id = $3;` ,
    
    // Buscar Productos
    searchProducts:
        ` SELECT * FROM products
            WHERE unaccent(name) ILIKE '%' || unaccent($1) || '%';`,

    // Actualizar stock de productos
    updateProductStock:
        ` UPDATE products
            SET stock = stock - $1
            WHERE product_id = $2`,
    
    // Editar Productos
    updateProducts:
        ` UPDATE products
            SET
                url_image = COALESCE($1, url_image),
                name = COALESCE($2, name),
                price = COALESCE($3, price),
                description = COALESCE($4, description),
                sizes = COALESCE($5, sizes),
                category = COALESCE($6, category),
                gender = COALESCE($7, gender),
                stock = COALESCE($8, stock)
            WHERE product_id = $9;`,
}

module.exports = queries;