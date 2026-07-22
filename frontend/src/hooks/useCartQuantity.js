import api from '../config/axiosInstance';

const useCartQuantity = (setCart) => {

    const updateQuantity = async (product_id, size, quantity, change) => {

        // Calculamos la nueva cantidad
        const newQuantity = quantity + change;

        // Bloquear cantidad en 1
        if(newQuantity < 1) return;
        
        try {
            await api.put('/api/cart/update-quantity', {
                product_id: product_id,
                size: size,
                quantity: newQuantity
            });

            // Actualizamos el estado al instante
            setCart(prevCart =>
                prevCart.map(item => {
                    if(item.product_id === product_id && item.size === size) {
                        return { ...item, quantity: newQuantity }
                    };
                    return item;
                })
            );

        } catch (error) {
            console.error("Error al actualizar la cantidad:", error);
            alert("No se pudo actualizar la cantidad. Inténtalo de nuevo.");
        }

    };
    return { updateQuantity };
}

export default useCartQuantity;