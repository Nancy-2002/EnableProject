package com.example.demo.repositories;




import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.EnableAccount;

@Repository
public interface EnableMongoRepository  extends MongoRepository<EnableAccount,Integer> {

	boolean existsByEmail(String email);
	boolean existsById(int empId);
	boolean existsByEmailAndPassword(String email,String password);
	boolean existsByEmailAndEmpType(String username, String empType);
	}
