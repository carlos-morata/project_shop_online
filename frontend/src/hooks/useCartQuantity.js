import axios from 'axios';

const useCartQuantity = () => {

    const updateQuantity = async (product_id, size, quantity, change) => {

        // Calculamos la nueva cantidad
        const newQuantity = quantity + change;

        // Bloquear cantidad en 1
        if(newQuantity < 1) return;
        
        // Obtener token
        const token = localStorage.getItem('token');
        try {
            const response = await axios.put('http://localhost:3000/api/cart/update-quantity', {
                quantity: newQuantity,
                product_id: product_id,
                size: size
            }, { headers: { Authorization: `Bearer ${token}` } });

            // Respuesta exitosa!
            return response;

        } catch (error) {
            console.error("Error al actualizar la cantidad:", error);
            alert("No se pudo actualizar la cantidad. Inténtalo de nuevo.");
        }

    };
    return { updateQuantity };
}

export default useCartQuantity;