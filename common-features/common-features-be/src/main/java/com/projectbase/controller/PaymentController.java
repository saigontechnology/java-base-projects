package com.projectbase.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.projectbase.dto.Error;
import com.projectbase.dto.ResponseDto;
import com.projectbase.dto.UserRequest;
import com.projectbase.dto.UserResponse;
import com.projectbase.factory.ValidationType;
import com.projectbase.mapper.UserMapper;
import com.projectbase.model.CreatePayment;
import com.projectbase.model.CreatePaymentItem;
import com.projectbase.model.CreatePaymentResponse;
import com.projectbase.model.User;
import com.projectbase.service.UserService;
import com.projectbase.validator.ValidatorProvider;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/payments/")
@Slf4j
public class PaymentController{

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ValidatorProvider validatorProvider;

    @PostMapping(value = "payment-intent")
    public ResponseEntity<ResponseDto<CreatePaymentResponse>> createPaymentIntent(@RequestBody CreatePayment createPayment) throws StripeException{

        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                        .setAmount(calculateOrderAmount(createPayment.getPaymentItems()))
                        .setCurrency("usd")
                        .setAutomaticPaymentMethods(
                                PaymentIntentCreateParams.AutomaticPaymentMethods
                                        .builder()
                                        .setEnabled(true)
                                        .build()
                        )
                        .build();

        // Create a PaymentIntent with the order amount and currency
        PaymentIntent paymentIntent = PaymentIntent.create(params);

        log.info("Create payment intent with total amount {} successfully", params.getAmount());

        CreatePaymentResponse paymentResponse = new CreatePaymentResponse(paymentIntent.getClientSecret());
        return ResponseEntity.ok(ResponseDto.response(paymentResponse));
    }

    static Long calculateOrderAmount(List<CreatePaymentItem> paymentItems) {
        return paymentItems.stream()
                .map(p->p.getAmount()*p.getPrice())
                .reduce(0L, Long::sum);
    }
}
