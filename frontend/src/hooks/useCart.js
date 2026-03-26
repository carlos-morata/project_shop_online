import axios from 'axios';

const useCart = () => {

    const addToCart = async (productId, quantity, sizes) => {
        // Obtener token
        const token = localStorage.getItem('token');

        // Comprobamos si hay token
        if(!token) {
            alert("Para añadir productos a la cesta, necesitas iniciar sesión.");
            return;
        };

        // Comprobamos si hay talla seleccionada
        if(!sizes) {
            alert("Para añadir un producto a la cesta, tienes que seleccionar tú talla.");
            return;
        }

        try {
            // Petición al endpoint
            const response = await axios.post('http://localhost:3000/api/cart/add-product', {
                product_id: productId,
                quantity: quantity,
                size: sizes
            }, { headers: { Authorization: `Bearer ${token}` } });

            // Respuesta exitosa!
            alert("¡Producto añadido a la cesta con éxito!");
            return response;
        } catch (error) {
            console.error(error);  
        };
    };
    return { addToCart };
};

export default useCart;