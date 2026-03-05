const pool = require("../config/db_sql");
const queries = require("../queries/productsQueries");

// Creación de Productos
const createProductModel = async (url_image, name, price, description, sizes, category, gender, stock) => {
    try {
        if(!name || !price || !sizes || !category || !gender || !stock) {
            throw new Error('Nombre, precio, tallas, categoría y stock son obligatorios');
        }
        const resultCreateProduct = await pool.query(queries.insertProduct, [ url_image, name, price, description, sizes, category, gender, stock ]);
        return resultCreateProduct
    } catch(error) {
        console.error('Error al Crear Producto: ', error.message);
        throw new Error('Error al Crear Producto');
    }
}

// Eliminación de Productos
const deleteProductModel = async (product_id) => {
        const resultDeleteProduct = await pool.query(queries.deleteProduct, [ product_id ]);
        return resultDeleteProduct
}

const getProductsModel = async(gender, category, limit = 16, page = 1) => {
    try {
        const offset = (page -1) * limit;
        const values = [ gender || null, category || null, limit, offset ];
        const countValues = [ gender || null, category || null];
        const summaryValues = [ gender || null];

        const [ resultProducts, resultCountProducts, resultSummary ] = await Promise.all([
            pool.query(queries.getProducts, values),
            pool.query(queries.countProductsQuery, countValues),
            pool.query(queries.GetCategories, summaryValues)
        ]);

        return { products: resultProducts.rows, 
            total: parseInt(resultCountProducts.rows[0].total),
            categories: resultSummary.rows,
        };

    } catch(error) {
        console.log('Error al mostrar Productos: ', error.message);
        throw new Error("Error al mostrar Productos");
    }
}

const getProductByIdModel = async (gender, category, product_id) => {
    try {
        const resultProductId = await pool.query(queries.getProductsById, [gender, category, product_id]);
        return resultProductId.rows;
    } catch (error) {
        console.error('Error al mostrar el Producto: ', error.message);
        throw new Error('Error al mostrar el Producto');
    }
}

const searchProductsModel = async (query) => {
    try {
        const resultProducts = await pool.query(queries.searchProducts, [query]);
        return resultProducts.rows;
    } catch (error) {
        console.error('Error al mostrar el Producto: ', error.message);
        throw new Error('Error al mostrar el Producto');
    }
}

module.exports = {
    createProductModel,
    deleteProductModel,
    getProductsModel,
    getProductByIdModel,
    searchProductsModel,
}