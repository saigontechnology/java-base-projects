package com.projectbase.service;

import java.util.List;
import java.util.Optional;

import com.projectbase.model.User;

public interface UserService{

    List<User> findAll();

    Optional<User> findById(Long id);

    boolean update(User user);

    Boolean existsByEmail(String email);
}
