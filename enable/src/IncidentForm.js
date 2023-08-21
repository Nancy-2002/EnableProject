import React, { useState } from 'react';
import './incidentform.css';
import { submitIncident } from "./services/userService";
import Navbar from './Navbar'; // Import the CSS file for styles
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IncidentForm= () =>{
    const[data, setFormData] = useState({
        empId:"",
        incidentTitle:"",
        incidentDescription:"",
        location:"",
        cubicle:"",
        category:"",
        priority:"",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        let parsedValue = value;
    
        if (name === 'empId') {
          if (!isNaN(value) && value !== "") {
            parsedValue = parseInt(value);
          } else {
            parsedValue = "";
          }
        }
    
        setFormData({
          ...data,
          [name]: parsedValue,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        
        submitIncident(data)
          .then((resp) => {
            console.log(resp);
            console.log("Submitted Successfully");
            toast.success("Submitted Successfully !");
          })
          .catch((error) => {
            console.log(error);
            console.log("Error submitting incident");
            toast.error("Error submitting incident");
          });
      };
        return (
            <div className="background-container">
              <Navbar />
            <div className="form-container">
                    <div className="form-title">Incident Request Form</div>
                    <form onSubmit={handleSubmit}>
                    <div htmlFor="empId">Employee ID:</div>
                        <input
                            type="number"
                            id="empId"
                            name="empId"
                            value={data.empId}
                            onChange={handleInputChange}
                            required
                        />
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