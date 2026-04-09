import React from "react";
import { Link } from "react-router-dom";
import { Truck } from 'lucide-react';

const FreeReturns = () => {
  return <section className="freeReturns-section">
    <h5 className="freeReturns-title"><Truck /> Devoluciones Gratuitas</h5>
    <p className="freeReturns-text">¿No te queda bien? Tienes 30 días para devolverlo sin coste alguno. <Link to="">Saber más</Link></p>
  </section>;
};

export default FreeReturns;
