package com.example.demo.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EnableAccount;

@RestController
public interface EnableDao extends JpaRepository<EnableAccount,Integer> {

	}
