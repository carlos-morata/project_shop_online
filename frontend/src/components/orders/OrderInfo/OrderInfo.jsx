import React from "react";
import { Truck, Map } from 'lucide-react';

const OrderInfo = () => {
  return <section>
    <h3>Información de Envío</h3>
    <Truck />
    <h4>Transportista</h4>
    <p>LUXE Express</p>
    <h4>Número de Seguimiento</h4>
    <p>#HL-994821004</p>
    <h4>Dirección de Entrega</h4>
    <p>Calle Luxe, 25, Madrid, España</p>
    <button>Ver en mapa <Map /></button>
  </section>;
};

export default OrderInfo;
