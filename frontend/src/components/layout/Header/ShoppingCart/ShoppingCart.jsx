import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
  return <>
    <Link to='/carrito'>
      <FontAwesomeIcon icon={faShoppingBag} className="links" />
    </Link>
  </>;
};

export default ShoppingCart;
