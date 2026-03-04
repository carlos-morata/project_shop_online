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
        const values = [gender || null, category || null, limit, offset];

        const resultProducts = await pool.query(queries.getProducts, values);
        return resultProducts.rows;
    } catch(error) {
        console.log('Error al mostrar Productos: ', error.message);
        throw new Error("Error al mostrar Productos");
    }
}

// const getByGenderModel = async (gender) => {
//     try {
//         const resultProductGender = await pool.query(queries.getProductsByGender, [gender]);
//         return resultProductGender.rows;
//     } catch (error) {
//         console.error('Error al mostrar Productos por Género: ', error.message);
//         throw new Error('Error al mostrar Productos por Género');
//     }
// }

// const getCategoriesByGenderModel = async (gender) => {
//     try {
//         const resultCategoryGender = await pool.query(queries.getCategoriesByGender, [gender]);
//         return resultCategoryGender.rows;
//     } catch (error) {
//         console.error('Error al mostrar Categorías por Género: ', error.message);
//         throw new Error('Error al mostrar Categorías por Género');
//     }
// }

// const getProductsByGenAndCatModel = async (gender, category) => {
//     try {
//         const resultGenderCategory = await pool.query(queries.getProductsByGenderAndCategory, [gender, category]);
//         return resultGenderCategory.rows;
//     } catch (error) {
//         console.error('Error al mostrar Productos por Categorías y Género: ', error.message);
//         throw new Error('Error al mostrar Productos por Categorías y Género');
//     }
// }

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
    // getByGenderModel,
    // getCategoriesByGenderModel,
    // getProductsByGenAndCatModel,
    getProductByIdModel,
    searchProductsModel,
}