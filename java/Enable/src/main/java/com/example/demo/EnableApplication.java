package com.example.demo;


import org.springframework.boot.SpringApplication;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@EntityScan(basePackages = "com.example.demo")
public class EnableApplication {

	
	
	
	public static void main(String[] args) {
		SpringApplication.run(EnableApplication.class, args);
	}
	public void run(String... args) throws Exception {
		
		// TODO Auto-generated method stub
		
	}

}
