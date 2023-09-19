package com.projectbase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projectbase.dto.JwtRequest;
import com.projectbase.producer.RabbitMQJsonProducer;
import com.projectbase.producer.RabbitMQProducer;

@RestController
@RequestMapping("/messages/")
public class MessageController{

    @Autowired
    private RabbitMQProducer producer;

    @Autowired
    private RabbitMQJsonProducer jsonProducer;

    // http://localhost:8080/api/messages/publish?message=hello
    @GetMapping("/publish")
    public ResponseEntity<String> sendMessage(@RequestParam("message") String message){
        producer.sendMessage(message);
        return ResponseEntity.ok("Message sent to RabbitMQ ...");
    }

    @PostMapping("/publish")
    public ResponseEntity<String> sendJsonMessage(@RequestBody JwtRequest jwtRequest){
        jsonProducer.sendJsonMessage(jwtRequest);
        return ResponseEntity.ok("A json message sent to RabbitMQ ...");
    }

}
