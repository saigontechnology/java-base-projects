package com.projectbase.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectbase.config.security.CurrentUser;
import com.projectbase.config.security.UserPrincipal;
import com.projectbase.dto.Error;
import com.projectbase.dto.ResponseDto;
import com.projectbase.dto.UserRequest;
import com.projectbase.dto.UserResponse;
import com.projectbase.entity.UserEntity;
import com.projectbase.exception.ResourceNotFoundException;
import com.projectbase.factory.ValidationType;
import com.projectbase.mapper.UserMapper;
import com.projectbase.model.User;
import com.projectbase.repository.UserRepository;
import com.projectbase.service.UserService;
import com.projectbase.validator.ValidatorProvider;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class UserController{

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ValidatorProvider validatorProvider;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/users/")
    public ResponseEntity<ResponseDto<List<UserResponse>>> findAll() {
        List<User> users = userService.findAll();
        List<UserResponse> userResponses = users.stream().map(user -> userMapper.fromUser(user)).collect(Collectors.toList());
        return ResponseEntity.ok(ResponseDto.response(userResponses));
    }

    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    @GetMapping("/users/{id}")
    public ResponseEntity<ResponseDto<UserResponse>> findById(@PathVariable Long id) {
        Optional<User> optUser = userService.findById(id);
        if(optUser.isPresent()){
            UserResponse userResponses = userMapper.fromUser(optUser.get());
            return ResponseEntity.ok(ResponseDto.response(userResponses));
        }
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    @PutMapping("/users/{id}")
    public ResponseEntity<ResponseDto<Boolean>> update(@PathVariable Long id,  @RequestBody UserRequest userRequest) {

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

    @GetMapping("/users/me")
    @PreAuthorize("hasAuthority('USER')")
    public UserEntity getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {

        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}
