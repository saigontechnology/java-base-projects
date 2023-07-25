package com.projectbase.service;

import java.util.List;
import java.util.Optional;

import com.projectbase.model.User;

public interface UserService{

    User create(User user);

    List<User> findAll();

    Optional<User> findById(String id);

    boolean update(User user);
}
