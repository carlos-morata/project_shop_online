import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

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
      const response = await axios.post(`http://localhost:3000/api/login`, {
        email: formValue.email,
        password: formValue.password
      });

      localStorage.setItem('token', response.data.user);
      window.location.href = '/';

      setFormValue(response.data);
      navigate('/')

    } catch (err) {
      console.error(err);
    }
  }

  return <section className="login-container">
    <h1>Inicia Sesión</h1>

    {error && <p>{error}</p>}
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Correo Eléctronico</label>
      <input type="email" name="email" id="email" required placeholder="pepe@gmail.com" onChange={handleChange} />

      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" required placeholder="******" onChange={handleChange} />

      <button type="submit">Iniciar Sesión</button>
    </form>
    <p className="register-text">¿Todavía no tienes una Cuenta de Usuario?</p>
    <Link to='/registro'>Regístrate</Link>
  </section>;
};

export default LoginUser;
