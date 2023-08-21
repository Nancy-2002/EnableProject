package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EnableIncident;
import com.example.demo.repositories.IncidentMongoRepository;

@CrossOrigin("*")
@RestController
public class IncidentController {
	
	@Autowired
	IncidentMongoRepository mongoRepository;

	@PostMapping("/incident")
	public ResponseEntity<String> incidentForm(@RequestBody EnableIncident i) {
	mongoRepository.save(i);
	
	return ResponseEntity.status(HttpStatus.CREATED).body("Incident Details submitted successfully");
	}
}
