import React from "react";

const OrderTracking = ({ state }) => {
  const steps = ['pending', 'in process', 'sent', 'delivered'];
  const stateLabels = {
    'pending': 'Pendiente',
    'in process': 'En Proceso',
    'sent': 'Enviado',
    'delivered': 'Entregado'
  }
  const currentIndex = steps.indexOf(state);

  return <ol>
     { steps.map((step, index) => (
        <li key={index} className={index < currentIndex ? 'complete' : index === currentIndex ? 'active' : 'pending'}>
          { stateLabels[step] }
        </li> 
      )) }
  </ol>
};

export default OrderTracking;
