package com.projectbase.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

import com.projectbase.dto.UserRequest;
import com.projectbase.dto.UserResponse;
import com.projectbase.entity.UserEntity;
import com.projectbase.model.User;

@Component
@Mapper(componentModel = "spring")
public interface UserMapper{

    UserEntity toUserEntity(User user);

    @Mapping(target = "roles", source = "user.roles")
    User fromUserEntity(UserEntity user);

    User toUser(UserRequest userRequest);

    @Mapping(target = "roles", source = "user.roles")
    UserResponse fromUser(User user);
}
