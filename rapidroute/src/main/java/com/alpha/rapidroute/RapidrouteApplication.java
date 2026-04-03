package com.alpha.rapidroute;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class RapidrouteApplication {

	public static void main(String[] args) {
		SpringApplication.run(RapidrouteApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {

			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOriginPatterns("http://localhost:*")
						.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS").allowedHeaders("*")
						.allowCredentials(true);
			}
		};
	}

	// create 2 addresses and store in database
	// place an order with loading addresses and unloading addresses
	// update the order to add the carrier to the order
	// update the order to add the loading info and change the status
	// update the order to add unloading info and change the status

	// place the order
	// Cancel the order

	// place the order and finish the order with unloading
	// return the order

}
