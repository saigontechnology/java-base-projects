package com.projectbase.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import com.projectbase.dto.UserRequest;
import com.projectbase.dto.UserResponse;
import com.projectbase.entity.ProductEntity;
import com.projectbase.model.User;

@Component
@Mapper(componentModel = "spring")
public interface UserMapper{

    ProductEntity toUserEntity(User user);

    User fromUserEntity(ProductEntity user);

    User toUser(UserRequest userRequest);

    UserResponse fromUser(User user);
}
