package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	@GetMapping("/incidents/{email}")
    public ResponseEntity<List<EnableIncident>> getIncidentsByEmployeeId(@PathVariable String email) {
        List<EnableIncident> incidents = mongoRepository.findByEmail(email);
        
        if (incidents.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
        return ResponseEntity.ok(incidents);
    }
}
	
