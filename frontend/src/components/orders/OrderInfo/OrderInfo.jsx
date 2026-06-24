import React from "react";
import { Truck, Map, Copy } from 'lucide-react';

const OrderInfo = () => {
  return <section className="orderInfo-section">
    <h3 className="orderInfo-title">Información de Envío</h3>
    <h4 className="transport-title">
      <Truck />
      Transportista
    </h4>
    <p className="transport-text">Luxe Express</p>
    <h5 className="tracking-title">Número de Seguimiento</h5>
    <p className="tracking-number">
      #HL-994821004
      <Copy />
    </p>
    <h5 className="address-title">Dirección de Entrega</h5>
    <p className="address-text">Calle Luxe, 25, Madrid, España</p>
    <button className="view-button">Ver en mapa <Map /></button>
  </section>;
};

export default OrderInfo;
