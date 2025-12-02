package com.Portfolio.PaymentApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PaymentAppApplication {

	public static void main(String[] args) {
		System.out.println("Hello World from Spring Boot!");
		SpringApplication.run(PaymentAppApplication.class, args);
	}
	
	@GetMapping("/")
	public String home() {
		return "Hello World from Spring Boot!";
	}
	
	@GetMapping("/hello")
	public String hello() {
		return "Hello from the /hello endpoint!";
	}
}