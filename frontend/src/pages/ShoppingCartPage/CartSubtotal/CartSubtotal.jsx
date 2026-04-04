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
      Envío Estimado <span className="subtotal-span">Gratis</span>
    </p>
    <hr />

    <h3 className="promoCode-title">Código Promocional</h3>
    <input className="promoCode-input" type="text" />
    <button className="promoCode-button">Aplicar</button>
    <hr />

    <h4 className="cartTotal-title">Total</h4>
    <p className="cartTotal-price">{subtotal.toFixed(2)}</p>
    <span>Incluye IVA</span>

    <button className="finalizePurchase-button">Finalizar Compra</button>

  </article>;
};

export default CartSubtotal;
