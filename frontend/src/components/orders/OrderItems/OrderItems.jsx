import React from "react";

const OrderItems = ({ products }) => {
  return <>
  <h3>Artículos del Pedido ({ products && products.length })</h3>
    { products &&
      products.map((item, index) => (
        <article key={index}>
          <img src={item.url_image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>{item.size}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>{item.price}€</p>
        </article>
      )
      )}
  </>;
};

export default OrderItems;
