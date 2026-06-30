import React, { useEffect, useState } from "react";
import api from '../../config/axiosInstance';
const VITE_API_URL = import.meta.env.VITE_API_URL;
import ListUserPanel from "../../components/common/ListUserPanel"; 

const UserPage = () => {

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const fetchPanelUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if(!token) {
          alert("Para ver tú Panel de Usuario, debes registrarte o iniciar sesión.");
          return;
        }

        const response = await api.get(`/users/`, 
          { headers: { Authorization: `Bearer ${token}`} });

          setUser(response.data.data);
          console.log(response.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPanelUser();
  }, []);

  return <>
  <h2 className="summary-title">Resumen de Cuenta</h2>
  <h3 className="panelUser-title">Panel de Usuario</h3>
  { user && <p className="welcome-text">Bienvenido/a de nuevo {user.username}. Gestiona tus pedidos y preferencias aquí.</p> }
  <ListUserPanel />

  <h4 className="userData-title">Datos de Usuario</h4>
  { user &&
    <form className="userData-form">
      <label className="user-label">Nombre de Usuario:
        <input value={user?.username} readOnly className="user-input"/>
      </label>
      <label className="user-label">Correo Eléctronico:
        <input value={user?.email} readOnly className="user-input"/>
      </label>
    </form>
  }
  </>;
};

export default UserPage;
