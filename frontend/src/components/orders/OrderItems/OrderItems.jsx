import React from "react";

const OrderItems = ({ products }) => {
  return <section className="orderArticles-section">
  <h3 class="orderArticles-title">Artículos del Pedido ({ products && products.length })</h3>
  <hr />
    { products &&
      products.map((item, index) => (
        <article className="orderArticle-container" key={index}>
          <img className="orderArticle-image" src={item.url_image} alt={item.name} />
          <div>
            <h4 className="orderArticle-name">{item.name}</h4>
            <p className="orderArticle-size">Talla: {item.size}</p>
            <p className="orderArticle-quantity">Cantidad: {item.quantity}</p>
            <p className="orderArticle-price">{item.price}€</p>
          </div>
        </article>
      )
    )}
  </section>;
};

export default OrderItems;
