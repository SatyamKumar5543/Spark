// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // try {
    //   const response = await axios.post('http://localhost:8000/api/authenticate/', { username, password });
    //   console.log(response.data.message); // Handle success message
    //   onLogin(); // Call onLogin only if authentication is successful
    // } catch (error) {
    //   console.error('Error authenticating:', error);
    //   setError('Invalid username or password'); // Set error message for display
    // }


    // try {
    //   const response = await
    //     fetch('http://localhost:8000/api/authenticate/',{
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ username, password }),
    //     });
    //   const data = await response.json();
    //   console.log(data);
    // }
    // catch (error) {
    //   console.error(error);
    // }
    onLogin && onLogin();
  };

  return (

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
            onChange={(e) => setPassword(e.target.value)} />
          <button class="clkbtn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
