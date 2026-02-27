import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from './SocialLinks'
import logo from '../../../../public/images/Logo Luxe.png'


const Footer = () => {
  return <footer className="footer-container">
     <Link to='/' className="logo">
      <img src={logo} alt="Logotipo" />
      <h1>Luxe</h1>
    </Link>
    <p>
      Redefiniendo el lujo moderno mediante prácticas sostenibles y un diseño atemporal. Acompáñenos en nuestro viaje hacia un futuro más consciente.
    </p>
    <SocialLinks />
    <span className="copy-footer">&copy; 2026 Luxe Fashion Store. Todos los derechos reservados.</span>
  </footer>;
};

export default Footer;
