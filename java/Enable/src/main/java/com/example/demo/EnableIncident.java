package com.example.demo;

import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "enableIncidents")
public class EnableIncident {
	
	private String email;
	private String incidentTitle;
	private String incidentDescription;
	private String location;
	private String cubicle;
	private String category;
	private String priority;
	
	
	public String getEmail() {
		return email;
	}
	public void setEmpId(String email) {
		this.email = email;
	}
	public String getIncidentTitle() {
		return incidentTitle;
	}
	public void setIncidentTitle(String incidentTitle) {
		this.incidentTitle = incidentTitle;
	}
	public String getIncidentDescription() {
		return incidentDescription;
	}
	public void setIncidentDescription(String incidentDescription) {
		this.incidentDescription = incidentDescription;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCubicle() {
		return cubicle;
	}
	public void setCubicle(String cubicle) {
		this.cubicle = cubicle;
	}
	
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	@Override
	public String toString() {
		return "EnableIncident [email=" + email + ", incidentTitle=" + incidentTitle + ", incidentDescription="
				+ incidentDescription + ", location=" + location + ", cubicle=" + cubicle + ", category=" + category
				+ ", priority=" + priority + "]";
	}
	
	
	
	
	

}
