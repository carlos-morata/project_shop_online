import React from "react";

const CartSubtotal = ( { cart } ) => {
  
  // Calculamos el subtotal del carrito
  const subtotal = cart.reduce((accumulator, item) => {
    const precio = parseFloat(item.price);

    return accumulator + ( precio * item.quantity );
  }, 0);

  return <article className="cartSubtotal-container">
    <h2 className="orderSummary-title">Resumen del Pedido</h2>

    <p className="subtotal-text">
      Subtotal <span className="subtotal-span">{subtotal.toFixed(2)} €</span>
    </p>
    <p className="subtotal-text">
      Envío Estimado <span className="subtotal-span free-span">Gratis</span>
    </p>
    <hr className="subtotal-line" />

    <h3 className="promoCode-title">Código Promocional</h3>
    <div className="promoCode-container">
    <input className="promoCode-input" type="text" placeholder="Código" />
    <button className="promoCode-button">Aplicar</button>
    </div>
    <hr className="subtotal-line" />

    <section className="cartTotal-container">
      <h4 className="cartTotal-title">Total</h4>
      <p className="cartTotal-price">{subtotal.toFixed(2)} €
        <span className="includeIva-span">Incluye IVA</span>
      </p>
    </section>

    <button className="finalizePurchase-button">Finalizar Compra &#8594;</button>

  </article>;
};

export default CartSubtotal;
