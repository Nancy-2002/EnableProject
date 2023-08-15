package com.example.demo.controllers;



import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EnableAccount;
import com.example.demo.repositories.EnableDao;


@RestController
@CrossOrigin("*")
public class EnableController {
	
	//@Autowired
	
	EnableDao dao;
	
	@GetMapping("/")
	public String openAccount() {
		return"<html><body><h1>Welcome to the Register page </h1></body></html>";
	}
	@PostMapping("/register")
	public String openAccount(@RequestBody EnableAccount ca) {
		dao.save(ca);
		return("Account opened successfully");
	}
	

}
