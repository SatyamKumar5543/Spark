// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    axios.post('http://localhost:8000/api/authenticate/', { username, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error authenticating:', error);
      });
  };

  return (
    // <div className="login-container">
    //   <h2>Login</h2>
    //   <label>
    //     Username:
    //     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    //   </label>
    //   <label>
    //     Password:
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //   </label>
    //   <button onClick={handleLogin}>Login</button>
    //   {error && <p className="error-message">{error}</p>}
    // </div>

    <div class="container">
      <div class="form-section">
        <div class="login-box">
          <input type="Username"
            value={username}
            class="email ele"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)} />
          <input type="password"
            value={password}
            class="password ele"
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}/>
          <button class="clkbtn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
