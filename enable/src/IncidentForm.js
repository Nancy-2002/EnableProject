import React, { useState } from 'react';
import './incidentform.css';
import { submitIncident } from "./services/userService";
import Navbar from './Navbar.tsx'; // Import the CSS file for styles
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IncidentForm= () =>{
    const email = localStorage.getItem('email')
    const[data, setFormData] = useState({
        email:email,
        incidentTitle:"",
        incidentDescription:"",
        location:"",
        cubicle:"",
        category:"",
        priority:"",
        status:"Open",
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
   
    
      const handleSubmit = (event) => {
        event.preventDefault();
        
        submitIncident(data)
          .then((resp) => {
            console.log(resp);
            console.log("Submitted Successfully");
            toast.success("Submitted Successfully !");
            window.location.href = '/employee/dashboard/:email';
          })
          .catch((error) => {
            console.log(error);
            console.log("Error submitting incident");
            toast.error("Error submitting incident");
          });
      };
        return (
            <div>
              <Navbar />
            <div className="form-container">
                    <div className="form-title">Incident Request Form</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="incidentTitle">Incident Title:</label>
                            <input type="text" id="incidentTitle" name="incidentTitle" value={data.incidentTitle} onChange={handleInputChange} required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="incidentDescription">Incident Description:</label>
                            <textarea id="incidentDescription" name="incidentDescription" rows="4" cols="50" value={data.incidentDescription}   onChange={handleInputChange} required></textarea>
                        </div>

                        <div className="form-field">
                            <label htmlFor="location">Location:</label>
                            <input type="text" id="location" name="location" value={data.location}   onChange={handleInputChange} required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="cubicle">Cubicle:</label>
                            <input type="text" id="cubicle" name="cubicle" value={data.cubicle}   onChange={handleInputChange} required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="category">Category/Type:</label>
                            <select id="category" name="category"  value={data.category}  onChange={handleInputChange} required >
                                <option value=""> Select category </option>
                                <option value="Building"> Building </option>
                                <option value="Pantry"> Pantry </option>
                                <option value="Sanitary"> Sanitary </option>
                                <option value="Desk"> Desk </option>
                                <option value="HouseKeeping"> HouseKeeping </option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label htmlFor="priority">Priority:</label>
                            <select id="priority" name="priority"  value={data.priority}  onChange={handleInputChange} required>
                                <option value=""> Select Priority </option>
                                <option value="High"> High </option>
                                <option value="Medium"> Medium </option>
                                <option value="Low"> Low </option>
                            </select>
                        </div>

                        <div className="form-field">
                            <input type="submit" value="Submit" className="submit-button" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }; 

export default IncidentForm;