import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
const VITE_API_URL = import.meta.env.VITE_API_URL;
// Importaciones componentes de orders
import Orderinfo from '../../components/orders/OrderInfo';
import OrderItems from '../../components/orders/OrderItems';
import OrderSummary from '../../components/orders/OrderSummary';
import OrderTracking from '../../components/orders/OrderTracking';

const OrderDetailPage = () => {
  const [ orderDetail, setOrderDetail ] = useState([]);
  const { order_id } = useParams();

  useEffect(() => {
    const fetchOrderId = async () => {
      try {
        const token = localStorage.getItem('token');
        if(!token) {
          alert("Para ver tus pedidos, necesistar iniciar sesión.");
          return;
        }

        const response = await axios.get(`${VITE_API_URL}/api/order/${order_id}`,
          { headers: { Authorization: `Bearer ${token}` } });
          setOrderDetail(response.data.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchOrderId();
    }, [order_id]);

  return <section>
    <h3>Pedido #{order_id}</h3>
    {/* <p>
      { orderDetail[0]?.created_date && new Date(orderDetail[0].created_date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric' 
      }) }
    </p> */}
    <OrderItems products={orderDetail[0]?.products}/>
  </section>;
};

export default OrderDetailPage;
