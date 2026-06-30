import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from '../../config/axiosInstance';

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

        const response = await api.get(`/order/`, 
          { headers: { Authorization: `Bearer ${token}` } });

          setOrder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrder();
  }, []);

  return <section className="orders-container">
    <h2 className="title-myOrders">Historial de Mis Pedidos</h2>
    <p className="text-myOrders">Gestiona y revisa el estado de tus compras anteriores.</p>
    <section className="order-stateFilter-container">
      <button className="order-stateFilter-button">Todos</button>
      <button className="order-stateFilter-button">En camino</button>
      <button className="order-stateFilter-button">Entregado</button>
      <button className="order-stateFilter-button">Cancelado</button>
    </section>

    <section className="all-userOrders-container">
    { order.length === 0 ? ( <p>Todavía no tienes pedidos.</p> ) : (
      order.map((item, index) => (
        <article key={index} className="order-article">
          <div className="order-top-container">
            <h3 className="title-order">Pedido #{item.order_id}</h3>
            <span className="order-state-text">{item.state}</span>
          </div>
          <p className="order-date-text">Realizado el { order[0]?.created_date && new Date(order[0].created_date).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric' 
            }) }
          </p>
          <p className="order-totalPrice-text">Total
            <span>{item.total_price}€</span>
          </p>
          <hr />
          { item.products.slice(0, 3).map(product => <img key={index} src={product.url_image} />) }
          { item.products.length > 3 && <span>+{item.products.length -3}</span> }
          <Link className="order-details-link" to={`/pedidos/${item.order_id}`}>Ver Detalles</Link>
        </article>
      ))
    )}
    </section>

  </section>;
};

export default OrdersPage;
