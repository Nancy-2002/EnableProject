import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from './services/userService';
import './login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(loginData); // Pass the loginData object directly
      console.log(response);
      const userEmail = loginData.email;
      console.log(userEmail);
      // Handle success
      
      //window.location.href = '/employee/dashboard/:email';
      navigate('/employee/incident_list/:email', { state: { email: userEmail } });
      //navigate('/employee/dashboard/:email', { state: { email: userEmail } });
      

      toast.success(response);
      setIsLoggedIn(true);
      
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-form">
      <h2>SIGN IN</h2>
      <form onSubmit={handleSubmit}>
      <div class="field">
  <label>Email:</label>
  <input
    type="text"
    id="email"
    name="email"
    value={loginData.email}
    onChange={handleInputChange}
    class="password" /* Apply same class as for password input */
  />
</div>
<div class="field">
  <label>Password:</label>
  <input
    type="password"
    id="password"
    name="password"
    value={loginData.password}
    onChange={handleInputChange}
    class="password"
  />
</div>
        <button type="submit">SIGN IN</button>
        <p>
          Don't have an account?&nbsp;&nbsp;
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
