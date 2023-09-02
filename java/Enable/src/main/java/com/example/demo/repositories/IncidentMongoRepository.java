package com.example.demo.repositories;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.EnableIncident;

@Repository
public interface IncidentMongoRepository  extends MongoRepository<EnableIncident,Integer> {

	List<EnableIncident> findByEmail(String email);
	

}