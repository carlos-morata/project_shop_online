import React from "react";
import { Link } from "react-router-dom";
import useLogout from '../../../hooks/useLogout';

const ListUserPanel = () => {
  const { handleLogout } = useLogout();
  return <ul>
    <li>
      <Link to='/panel-usuario'>Panel Principal</Link>
    </li>
    <li>
      <Link to='/pedidos'>Mis Pedidos</Link>
    </li>
    <li>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </li>
  </ul>;
};

export default ListUserPanel;
