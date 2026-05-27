import React, { useState, useEffect } from "react";
import axios from 'axios';
const VITE_API_URL = import.meta.env.VITE_API_URL;

const OrdersPage = () => {

  const [ order, setOrder ] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem('token');

        if(!token) {
          alert("Para ver tus pedidos, necesistar iniciar sesión.");
          return;
        }

        const response = await axios.get(`${VITE_API_URL}/api/order/`, 
          { headers: { Authorization: `Bearer ${token}` } });

          setOrder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrder();
  }, []);

  return <section>

  </section>;
};

export default OrdersPage;
