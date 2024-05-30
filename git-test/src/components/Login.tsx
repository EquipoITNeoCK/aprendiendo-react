import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&?#*]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('La contraseña no cumple con los requisitos.');
    } else {
      setError('');
      // Aquí podrías manejar el envío del formulario
      console.log('Formulario enviado');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Correo electrónico o nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <p className="password-requirements">
          Mínimo 8 caracteres, 1 mayúscula, 1 minúscula y un caracter especial, por ejemplo (&?#*).
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
