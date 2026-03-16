import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const RegisterUser = () => {
  const navigate = useNavigate();

  // Guardar datos del formulario
  const [ formValue, setFormValue ] = useState({
    username: "",
    email: "",
    password: "",
    repitePassword: ""
  });

  const [ error, setError ] = useState(null);

  // Manejar cambios
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };

  // Envío de Formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)

    if(formValue.password !== formValue.repitePassword) {
      setError("Las contraseñas deben coincidir.");
      return;
    };

    try {
      const response = await axios.post(`http://localhost:3000/api/signup `, {
        username: formValue.username,
        email: formValue.email,
        password: formValue.password
      });

      setFormValue(response.data);
      navigate('/inicioSesión');

    } catch (err) {
      console.error(err);
    }
  }

  return <section className="userForm-container">
    <h2 className="register-title"> <span>Crear</span> Cuenta</h2>

    {error && <p>{error}</p>}

    <form className="register-form" action="" onSubmit={handleSubmit}>
      <label className="register-label" htmlFor="username">Nombre de Usuario</label>
      <input className="register-input" type="text" name="username" id="username" placeholder="pepeMorales" required onChange={handleChange} />

      <label className="register-label" htmlFor="email">Correo Eléctronico</label>
      <input className="register-input" type="email" name="email" id="email" placeholder="pepe@gmail.com" required onChange={handleChange} />

      <label className="register-label" htmlFor="password">Contraseña</label>
      <input className="register-input" type="password" name="password" placeholder="******" required onChange={handleChange} />

      <label className="register-label" htmlFor="repitePassword">Repite la Contraseña</label>
      <input className="register-input" type="password" name="repitePassword" placeholder="******" required onChange={handleChange} />

      <button className="register-button" type="submit">Crear Cuenta</button>
    </form>

    <p className="login-text">¿Ya tienes una cuenta?
    <Link to="/inicioSesión">Inicia Sesión</Link>
    </p>
  </section>;
};

export default RegisterUser;
