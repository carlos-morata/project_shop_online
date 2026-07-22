import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from '../../config/axiosInstance';
import useAuth from "../../hooks/useAuth";
// Importaciones componentes de orders
import Orderinfo from '../../components/orders/OrderInfo';
import OrderItems from '../../components/orders/OrderItems';
import OrderSummary from '../../components/orders/OrderSummary';
import OrderTracking from '../../components/orders/OrderTracking';

const OrderDetailPage = () => {
  const [ orderDetail, setOrderDetail ] = useState([]);
  const { order_id } = useParams();
  const user = useAuth();

  useEffect(() => {
    const fetchOrderId = async () => {
      try {
        if(!user) {
          alert("Para ver tus pedidos, necesistar iniciar sesión.");
          return;
        }

        const response = await api.get(`/api/order/${order_id}`);
          setOrderDetail(response.data.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchOrderId();
    }, [order_id]);

  return <section class="orderDetail-section">
    <h3 class="orderDetail-title">Pedido #{order_id}</h3>
    <p class="orderDetail-date">Realizado el { orderDetail[0]?.created_date && new Date(orderDetail[0].created_date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric' 
      }) }
    </p>
    <OrderTracking state={orderDetail[0]?.state}/>
    <OrderItems products={orderDetail[0]?.products}/>
    <Orderinfo />
    <OrderSummary total_price={orderDetail[0]?.total_price}/>
  </section>;
};

export default OrderDetailPage;
