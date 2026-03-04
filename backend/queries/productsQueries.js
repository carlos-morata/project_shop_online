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
                WHERE ($1::text IS NULL OR LOWER(gender) = LOWER($1))
                    AND ($2::text IS NULL OR LOWER(category) = LOWER($2))
                ORDER BY id ASC
                LIMIT $3
                OFFSET $4;`,
    
    // Cantidad total de Productos
        totaQuantityProducts:
            `SELECT COUNT(*) AS total
                FROM products
                WHERE ($1::text IS NULL OR LOWER(gender) = LOWER($1))
                    AND ($2::text IS NULL OR LOWER(category) = LOWER($2));`,
            
    // Leer Productos por genero
    getProductsByGender:
        ` SELECT * FROM products 
        WHERE gender = $1;`,
    
    // Leer Categoría por Género 
    getCategoriesByGender: 
        // ` SELECT DISTINCT category FROM products
        //     WHERE gender = $1`,
        ` SELECT category,
            COUNT(*)::int AS total_products
            FROM products WHERE gender = $1
            GROUP BY category
            ORDER BY category;`,
    
    // Leer Productos Por Categoría y Género
    getProductsByGenderAndCategory: 
        ` SELECT * FROM products
            WHERE gender = $1 AND LOWER(category) = LOWER($2);`,
    
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