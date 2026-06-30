import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const LoginUser = () => {
  const navigate = useNavigate();

  const [ formValue, setFormValue ] = useState({
    email: "",
    password: ""
  });

  const [ error, setError ] = useState(null);

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if(!formValue.email || !formValue.password) {
      setError("Campos incompletos.");
      return;
    };

    try {
      const response = await axios.post(`${VITE_API_URL}/users/login`, {
        email: formValue.email,
        password: formValue.password
      });

      localStorage.setItem('token', response.data.user.token);
      window.location.href = '/';

      setFormValue(response.data);
      navigate('/')

    } catch (err) {
      console.error(err);
    }
  }

  return <section className="userForm-container">
    <h2 className="user-title"><span>Inicia</span> Sesión</h2>

    {error && <p>{error}</p>}
    
    <form className="user-form" onSubmit={handleSubmit}>
      <label className="user-label" htmlFor="email">Correo Eléctronico</label>
      <input className="user-input" type="email" name="email" id="email" required placeholder="pepe@gmail.com" onChange={handleChange} />

      <label className="user-label" htmlFor="password">Contraseña</label>
      <input className="user-input" type="password" name="password" id="password" required placeholder="******" onChange={handleChange} />

      <button className="user-button" type="submit">Iniciar Sesión</button>
    </form>
    <p className="user-text">¿Todavía no tienes una Cuenta?
    <Link to='/registro'>Regístrate</Link>
    </p>
  </section>;
};

export default LoginUser;
