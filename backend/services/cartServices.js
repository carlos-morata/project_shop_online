const cartModels = require('../models/cartModels');

const deleteProductCartServices = async (cart_id) => {
    const resultDelete = await cartModels.deleteProductCartModel(cart_id);
    
    if(resultDelete.rowCount === 0) throw new Error('Error al borrar producto del carrito')
        else return resultDelete;
    
}

module.exports = {
    deleteProductCartServices
}