package com.projectbase.producer;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.projectbase.dto.JwtRequest;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class RabbitMQJsonProducer{

    @Value("${rabbitmq.exchange.name}")
    private String exchange;

    @Value("${rabbitmq.routing.json.key}")
    private String routingKey;

    private RabbitTemplate rabbitTemplate;

    public RabbitMQJsonProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendJsonMessage(JwtRequest message){
        rabbitTemplate.convertAndSend(exchange, routingKey, message);
        log.info(String.format("A json message sent -> %s", message));
    }
}
