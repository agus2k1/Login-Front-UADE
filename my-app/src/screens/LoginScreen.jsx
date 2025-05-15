import React, { useState } from 'react';
import users from '../data/users.json';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const LoginScreen = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const user = users.find(u => u.password.toLowerCase() === password.toLowerCase());

    if (user) {
      setIsLoggedIn(true);
    } else {
      alert('Email o contraseña incorrectos. Inténtalo de nuevo');
    }
  };

  return (
    <div style={styles.loginscreen}>
      <div style={styles.formContainer}>
        <h2 style={styles.h2}>Inicia sesión</h2>
        <label style={styles.label}>Email</label>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} />

        <label style={styles.label}>Contraseña</label>
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.passwordInput}
          />
          <button onClick={() => setShowPassword(!showPassword)} style={styles.toggleButton}>
            {showPassword ?  <FiEye size={13} /> : <FiEyeOff size={13} />}
          </button>
        </div>

        <button
          onClick={handleLogin}
          disabled={email.trim() === '' || password.trim() === ''}
          style={{
            ...styles.loginButton,
            backgroundColor: email.trim() === '' || password.trim() === '' ? 'gray' : 'blue',
          }}
        >
          Login
        </button>

        <button style={styles.registerButton} onClick={() => alert('Registro no implementado')}>Registrarse</button>
      </div>
    </div>
  );
};

const styles = {
  loginscreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  h2: {
    alignSelf: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    // gap: '15px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    marginTop: '5px'
  },
  input: {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    // marginTop: '8px'
  },
  passwordContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  passwordInput: {
    flex: 1,
    padding: '0 10px 0 10px',
    border: 'none',
  },
  toggleButton: {
    padding: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  loginButton: {
    padding: '10px',
    borderRadius: '10px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px'
  },
  registerButton: {
    background: 'none',
    border: 'none',
    textDecoration: 'underline',
    color: '#000',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '20px'
  },
};

export default LoginScreen;