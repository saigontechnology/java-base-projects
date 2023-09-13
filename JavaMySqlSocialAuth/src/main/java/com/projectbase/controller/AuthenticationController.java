package com.projectbase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectbase.dto.CredentialRequest;
import com.projectbase.dto.CredentialResponse;
import com.projectbase.dto.Error;
import com.projectbase.dto.ResponseDto;
import com.projectbase.dto.UserRequest;
import com.projectbase.entity.UserEntity;
import com.projectbase.exception.AuthenticationException;
import com.projectbase.factory.AuthProvider;
import com.projectbase.factory.TokenProvider;
import com.projectbase.factory.UserCreationFactory;
import com.projectbase.factory.ValidationType;
import com.projectbase.mapper.UserMapper;
import com.projectbase.model.User;
import com.projectbase.service.UserService;
import com.projectbase.validator.ValidatorProvider;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class AuthenticationController{

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserService userService;

    @Autowired
    private ValidatorProvider validatorProvider;

    @Autowired
    private UserCreationFactory userCreationFactory;

    @PostMapping("/auth/login")
    public ResponseEntity<ResponseDto<CredentialResponse>> authenticateUser(@RequestBody CredentialRequest loginRequest) {

        Authentication authentication = authenticate(loginRequest.getUsername(), loginRequest.getPassword());

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication);

        return ResponseEntity.ok(ResponseDto.response(new CredentialResponse(token)));
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<ResponseDto<Long>> registerUser(@RequestBody UserRequest userRequest) {

        log.info("create user with data: " + userRequest);

        ResponseDto<Long> responseDto = new ResponseDto<>();

        Boolean isExisted = userService.existsByEmail(userRequest.getEmail());
        if(Boolean.TRUE.equals(isExisted)) {
            responseDto.setErrors(List.of(new Error("Email is already in use")));
            return ResponseEntity.badRequest().body(responseDto);
        }

        final List<Error> errors = validatorProvider.execute(ValidationType.USER_CREATION, userRequest);

        if (!CollectionUtils.isEmpty(errors)) {
            responseDto.setErrors(errors);
            return ResponseEntity.badRequest().body(responseDto);
        }

        User user = userMapper.toUser(userRequest);

        UserEntity newlyUser = userCreationFactory.getUserCreationService(AuthProvider.local).create(user);

        return ResponseEntity.ok(ResponseDto.response(newlyUser.getId()));
    }

    private Authentication authenticate(String username, String password){
        try {
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new AuthenticationException("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new AuthenticationException("INVALID_CREDENTIALS", e);
        }
    }
}
