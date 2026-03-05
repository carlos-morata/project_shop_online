const productModels = require("../models/productModels");

// Crear Producto
const createProduct = async(req, res) => {
    try {
        const { url_image, name, price, description, sizes, category, gender, stock } = req.body;

        if(!url_image || !name || !price || !description || !sizes || !category || !gender || !stock) {
            return res.status(400).json({ message: "Faltan datos obligatorios para crear un producto." });
        }
        const newProduct = await productModels.createProductModel(url_image, name, price, description, sizes, category, gender, stock);
        res.status(201).json({ message: "Producto Creado!", product: newProduct });
    } catch(error) {
       res.status(500).json({ message: "Error en el servidor", error});
    }
}

// Eliminar Producto
const deleteProduct = async(req, res) => {
    try {
        const { product_id } = req.params;
        const oldProduct = await productModels.deleteProductModel(product_id);
        res.status(201).json({ message: "Producto Borrado!", product: oldProduct });
    } catch(error) {
       res.status(500).json({ message: "Error en el servidor", error});
    }
}

// Leer Productos por Género, Categoría y Paginación
const getProducts = async (req, res) => {
    try {
        const { gender, category, page, limit } = req.query;

        const pageNumber = parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 16;
        
        const { products, total, categories } = await productModels.getProductsModel(gender, category, limitNumber, pageNumber);
        const totalPage = Math.ceil(total / limitNumber);

        if(!products || products.length === 0) {
            return res.status(200).json({  
                    message: `Producto vacío`,
                    products: products || [],
                    categories: categories || [],
                    pagination: {
                        total: 0,
                        page: 1,
                        limit: 16,
                        totalPage: 0
                    }
                });
        }

        return res.status(200).json({
            products: products, 
            categories: categories,
            pagination: {
                total: total,
                page: pageNumber || 1,
                limit: limitNumber,
                totalPage: totalPage
            }
        });

    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

// Leer Producto específico por id
const getProductById = async (req, res) => {
    try {
        const { gender, category, product_id } = req.params;
        const product = await productModels.getProductByIdModel(gender, category, product_id);
        console.log(product)

        if(!product) {
            return res.status(400).json({ message: "No se encuentra el producto"});
        }

        res.status(200).json(product);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

// Buscar Productos
const searchProducts = async (req, res) => {
    try {
        const { query } = req.query;
        
        if(!query || query.trim() === "") {
            return res.status(400).json({ message: "Debe buscar un producto real" });
        }
        const resultProducts = await productModels.searchProductsModel(query);
        res.status(200).json(resultProducts);
        
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    getProducts,
    getProductById,
    searchProducts,
}