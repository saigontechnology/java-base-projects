package com.projectbase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class JavaMongoApplication{

	public static void main(String[] args) {
		SpringApplication.run(JavaMongoApplication.class, args);
	}

}
