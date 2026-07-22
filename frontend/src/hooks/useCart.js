import api from '../config/axiosInstance';
import useAuth from '../hooks/useAuth';

const useCart = () => {

    const user = useAuth();

    const addToCart = async (productId, quantity, sizes) => {

        // Comprobamos si hay token
        if(!user) {
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
            const response = await api.post('/api/cart/add-product', {
                product_id: productId,
                quantity: quantity,
                size: sizes
            });

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