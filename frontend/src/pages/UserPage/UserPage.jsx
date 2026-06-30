import React, { useEffect, useState } from "react";
import axios from 'axios';
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

        const response = await axios.get(`${VITE_API_URL}/users/`, 
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
  <h2>Resumen de Cuenta</h2>
  <h3>Panel de Usuario</h3>
  { user && <p>Bienvenido/a de nuevo {user.username}. Gestiona tus pedidos y preferencias aquí.</p> }
  <ListUserPanel />

  { user &&
    <form className="userData-form">
      <label>Nombre de Usuario:</label>
      <input value={user?.username} readOnly/>
      <label>Correo Eléctronico:</label>
      <input value={user?.email} readOnly/>
    </form>
  }
  </>;
};

export default UserPage;
