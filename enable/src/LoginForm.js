import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'user' && password === 'password') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div class="login-form">
      <h2>SIGN IN</h2>
      <form onSubmit={handleSubmit}>
        <div class="field">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">SIGN IN</button>
        <p>Don't have an account<Link to= "/register"> Register</Link></p>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
