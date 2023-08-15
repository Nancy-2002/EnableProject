import React from 'react';
import './incidentform.css';
import Navbar from './Navbar'; // Import the CSS file for styles

class IncidentForm extends React.Component {
    render() {
        return (
            <div className="background-container">
              <Navbar />
            <div className="form-container">
                    <div className="form-title">Incident Request Form</div>
                    <form action="#" method="post">
                        <div className="form-field">
                            <label htmlFor="incidentTitle">Incident Title:</label>
                            <input type="text" id="incidentTitle" name="incidentTitle" required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="incidentDescription">Incident Description:</label>
                            <textarea id="incidentDescription" name="incidentDescription" rows="4" cols="50" required></textarea>
                        </div>

                        <div className="form-field">
                            <label htmlFor="location">Location:</label>
                            <input type="text" id="location" name="location" required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="cubicle">Cubicle:</label>
                            <input type="text" id="cubicle" name="cubicle" required />
                        </div>

                        <div className="form-field">
                            <label htmlFor="category">Category/Type:</label>
                            <select id="category" name="category">
                                <option value="Building">Building</option>
                                <option value="Pantry">Pantry</option>
                                <option value="Sanitary">Sanitary</option>
                                <option value="Desk">Desk</option>
                                <option value="HouseKeeping">HouseKeeping</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label htmlFor="priority">Priority:</label>
                            <select id="priority" name="priority">
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <input type="submit" value="Submit" className="submit-button" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default IncidentForm;