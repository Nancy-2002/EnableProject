
package com.example.demo.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EnableAccount;

import com.example.demo.repositories.EnableMongoRepository;

@CrossOrigin("*")
@RestController
public class EnableController {
	
	@Autowired
	
	EnableMongoRepository mongoRepository;
	
	@GetMapping("/")
	public String openAccount() {
		return"<html><body><h1>Welcome to the Register page </h1></body></html>";
	}
	@PostMapping("/register")
	 public ResponseEntity<String> openAccount(@RequestBody EnableAccount ca) {
		int empId = ca.getEmpId();
		String email = ca.getEmail();
		boolean isDuplicateEmpId = mongoRepository.existsById(empId);

		boolean isDuplicateEmail = mongoRepository.existsByEmail(email);

		if (isDuplicateEmpId) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Employee ID already exists");
		}

		else if (isDuplicateEmail) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
		}
		else {
		mongoRepository.save(ca);
		return ResponseEntity.status(HttpStatus.CREATED).body("Account opened successfully");
		}
	}
}