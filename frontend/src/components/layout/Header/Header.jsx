import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Importaciones Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav'
import SearchProducts from '../../forms/SearchProducts'
import ShoppingCart from './ShoppingCart'
import logo from '../../../../public/images/Logo Luxe.png'

const Header = () => {
  const [ isLogged, setIsLogged ] = useState(false);

  useEffect(() => {
    // Buscamos el token en localStorage
    const token = localStorage.getItem('token');

    if(token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return <header className="header-container">
    <Nav />
    <Link to='/' className="logo">
      <img src={logo} alt="Logotipo" />
      <h1>Luxe</h1>
    </Link>
    <div className="right-header">
      <Link to='/buscar'> 
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
      <ShoppingCart />
      {isLogged ? (
    <Link to='/panel-usuario' className="links">
      <FontAwesomeIcon icon={faUser} />
    </Link>
      ) : (
      <Link to='/registro' className="links">
      <FontAwesomeIcon icon={faUserPlus} />
    </Link>
      )}
    </div>
  </header>;
};

export default Header;
