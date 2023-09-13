package com.projectbase.service;

import com.projectbase.entity.UserEntity;
import com.projectbase.model.User;

public interface UserCreationService{

    UserEntity create(User user);
}
