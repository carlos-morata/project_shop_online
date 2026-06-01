import React from "react";
import { ShieldCheck } from 'lucide-react';

const OrderSummary = ({ total_price }) => {
  return <section>
    <h3>Resumen del Pedido</h3>
    <p>Subtotal <span>{total_price}€</span></p>
    <p>Gastos de Envío <span>Gratis</span></p>
    <hr />
    <h4>Total</h4>
    <p>{total_price}€ <span>Incluye IVA</span></p>
    <button><ShieldCheck /> Pago Seguro Via Stripe</button>
  </section>;
};

export default OrderSummary;
