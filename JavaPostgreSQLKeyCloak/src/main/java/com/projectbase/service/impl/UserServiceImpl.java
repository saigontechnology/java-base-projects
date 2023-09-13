package com.projectbase.service.impl;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.projectbase.model.User;
import com.projectbase.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService{


    @Override
    public User create(User user){
        return User.builder()
                .id(123L)
                .email("user@gmail.com")
                .firstName("fuser")
                .lastName("luser")
                .password("abc@xyz")
                .build();
    }

    @Override
    public List<User> findAll(){
        return Collections.emptyList();
    }

    @Override
    public Optional<User> findById(Long id){
        return Optional.empty();
    }

    @Override
    public boolean update(User user){
        return false;
    }
}
