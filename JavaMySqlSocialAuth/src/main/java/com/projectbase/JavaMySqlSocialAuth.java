package com.projectbase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RestController;

import com.projectbase.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
@RestController
public class JavaMySqlSocialAuth{

	public static void main(String[] args) {
		SpringApplication.run(JavaMySqlSocialAuth.class, args);
	}

	@Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
}
