package com.example.demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.EnableIncident;

@RestController
public interface IncidentDao extends JpaRepository<EnableIncident,Integer> {


}