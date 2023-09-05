
package com.example.demo.controllers;



import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@CrossOrigin("*")
	@PostMapping("/")
	public ResponseEntity<String> login(@RequestBody EnableAccount ca) {
		System.out.println("Received request with email: " + ca.getEmail());
	        String username = ca.getEmail();
	        String password = ca.getPassword();
	        String empType = ca.getEmpType();
	        // Add your logic to validate the login credentials
	        // For example, you can check against a database or other authentication mechanisms

	        boolean isValidCredentials = mongoRepository.existsByEmailAndPassword(username, password);
	        boolean isValidEmp = mongoRepository.existsByEmailAndEmpType(username,empType);

	        if (isValidCredentials && isValidEmp) {
	            return ResponseEntity.ok("Login successful");
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials");
	        }

	    }
	    

	@PostMapping("/register")
	 public ResponseEntity<String> openAccount(@RequestBody EnableAccount ca) {
		int empId = ca.getEmpId();
		String email = ca.getEmail();
		String empType = ca.getEmpType();
		boolean isDuplicateEmpId = mongoRepository.existsByEmpIdAndEmpType(empId,empType);

		boolean isDuplicateEmail = mongoRepository.existsByEmailAndEmpType(email,empType);

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
	
	@GetMapping("/Empname/{email}")
	public ResponseEntity<String> getName(@PathVariable String email) {
        EnableAccount account = mongoRepository.findByEmailAndEmpType(email,"support");
        
        String name = account.getName();
        return ResponseEntity.ok(name);
    }
	@GetMapping("/admin/getsupport")
	public String[] getSupport() {
List<EnableAccount> accounts = mongoRepository.findByEmpType("support");
       
	String[] names = new String[accounts.size()];

// Extract names from EnableAccount objects and add to the array
	for (int i = 0; i < accounts.size(); i++) {
		names[i] = accounts.get(i).getName();
	}

        return names;
    }
}
