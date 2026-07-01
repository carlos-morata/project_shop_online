import { useNavigate } from "react-router-dom"; 
import api from '../config/axiosInstance';

const useOrder = () => {
    const navigate = useNavigate();
    const addToOrder = async (total_price, cartItems) => {

        // Obtener token
        const token = localStorage.getItem('token');

        // Comprobamos si hay token
        if(!token) {
            alert("Para realizar un pedido, necesitas iniciar sesión.");
            return;
        };

        // if(!cartItems) {
        //     alert("Para realizar un pedido, tienes que tener artículos en la cesta.")
        //     return;
        // }
        
        try {
            const response = await api.post(`/api/order/add`, {
             total_price: total_price,
             cartItems: cartItems
            }, { headers: { Authorization: `Bearer ${token}` } });
           navigate('/pedidos');
            return response;
        } catch (error) {
            console.error(error);  
        };
    };
    return { addToOrder };
};

export default useOrder;