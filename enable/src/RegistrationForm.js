import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { register } from "./services/userService";
import "./RegistrationForm.css";
import { toast } from 'react-toastify';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    employeeid: "",
    employeetype: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log(formData);

    register(formData).then((resp) =>{
      console.log(resp);
      console.log("Successfully Registered");
      toast.success("Registered Successfully !")
    }).catch((error) => {
      console.log(error);
      console.log("Error ");
    })
    
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

        <label htmlFor="employeeid">Employee ID:</label>
        <input
          type="text"
          id="employeeid"
          name="employeeid"
          value={formData.employeeid}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="employeetype">Employee Type:</label>
        <select
          id="employeetype"
          name="employeetype"
          value={formData.employeetype}
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