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
import com.projectbase.model.User;
import com.projectbase.service.UserService;
import com.projectbase.validator.ValidatorProvider;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/users/")
@Slf4j
public class UserController{

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ValidatorProvider validatorProvider;

    @PostMapping
    public ResponseEntity<ResponseDto<String>> createUser(@RequestBody UserRequest userRequest) {

        log.info("create user with data: " + userRequest);

        final List<Error> errors = validatorProvider.execute(ValidationType.USER_CREATION, userRequest);

        ResponseDto<String> responseDto = new ResponseDto<>();

        if (!CollectionUtils.isEmpty(errors)) {
            responseDto.setErrors(errors);
            return ResponseEntity.badRequest().body(responseDto);
        }

        User user = userMapper.toUser(userRequest);
        User newlyUser = userService.create(user);
        return ResponseEntity.ok(ResponseDto.response(newlyUser.getId()));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public ResponseEntity<ResponseDto<List<UserResponse>>> findAll() {
        List<User> users = userService.findAll();
        List<UserResponse> userResponses = users.stream().map(user -> userMapper.fromUser(user)).collect(Collectors.toList());
        return ResponseEntity.ok(ResponseDto.response(userResponses));
    }

    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto<UserResponse>> findById(@PathVariable String id) {
        Optional<User> optUser = userService.findById(id);
        if(optUser.isPresent()){
            UserResponse userResponses = userMapper.fromUser(optUser.get());
            return ResponseEntity.ok(ResponseDto.response(userResponses));
        }
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto<Boolean>> update(@PathVariable String id,  @RequestBody UserRequest userRequest) {

        final List<Error> errors = validatorProvider.execute(ValidationType.USER_UPDATING, userRequest);

        ResponseDto<Boolean> responseDto = new ResponseDto<>();

        if (!CollectionUtils.isEmpty(errors)) {
            responseDto.setErrors(errors);
            return ResponseEntity.badRequest().body(responseDto);
        }

        User user = userMapper.toUser(userRequest);
        user.setId(id);
        boolean isUpdated = userService.update(user);
        responseDto.setData(isUpdated);

        return ResponseEntity.ok(responseDto);
    }
}
