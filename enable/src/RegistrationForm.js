import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { register } from "./services/userService";
import "./RegistrationForm.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    empType: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let parsedValue = value;

  if (name === 'empId') {
    // Check if the value is a valid number
    if (!isNaN(value) && value !== "") {
      parsedValue = parseInt(value);
    } else {
      parsedValue = ""; // Clear the value if it's not a valid number
    }
  }
  
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your form submission logic here
    try {
      const response = await register(formData);
      console.log(response); // This will log the response data from the backend

      // Handle success
      toast.success(response);

    } catch (error) {
      console.error(error); // Log the error for debugging

      // Handle error
      if (error.response && error.response.data) {
        const errorMessage = error.response.data;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred during registration");
      }
    }
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="empId">Employee ID:</label>
        <input
          type="number"
          id="empId"
          name="empId"
          value={formData.empId}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="empType">Employee Type:</label>
        <select
          id="empType"
          name="empType"
          value={formData.empType}
          onChange={handleInputChange}
          required
        >
        
          <option value="">Select an employee type</option>
          <option value="support">Support Staff</option>
          <option value="team">Team Member</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      <div className="App">


<p>Already have an account? <Link to="/">Login here</Link></p>


    </div>


    </div>
    
  );
};

export default RegistrationForm;