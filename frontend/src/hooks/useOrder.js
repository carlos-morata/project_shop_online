import { useNavigate } from "react-router-dom"; 
import api from '../config/axiosInstance';
import useAuth from '../hooks/useAuth';

const useOrder = () => {
    const navigate = useNavigate();
    const user = useAuth();
    const addToOrder = async (total_price, cartItems) => {

        // Comprobamos si hay token
        if(!user) {
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
            });
           navigate('/pedidos');
            return response;
        } catch (error) {
            console.error(error);  
        };
    };
    return { addToOrder };
};

export default useOrder;