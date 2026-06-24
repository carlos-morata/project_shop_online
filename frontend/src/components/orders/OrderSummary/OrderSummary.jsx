import React from "react";
import { ShieldCheck } from 'lucide-react';

const OrderSummary = ({ total_price }) => {
  return <section className="summary-section">
    <h3 className="summary-title">Resumen del Pedido</h3>
    <p className="summary-subtotal summary-info">Subtotal <span>{total_price}€</span></p>
    <p className="summary-shipping summary-info">Gastos de Envío <span>Gratis</span></p>
    <hr />
    <div className="summary-bottom-container">
      <h4 className="summary-total-title">Total</h4>
      <p className="summary-total">{total_price}€ <span>Incluye IVA</span></p>
    </div>
    <button className="pay-button"><ShieldCheck /> Pago Seguro Via Stripe</button>
  </section>;
};

export default OrderSummary;
