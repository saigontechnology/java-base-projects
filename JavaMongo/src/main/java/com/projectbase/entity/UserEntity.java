package com.projectbase.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "users")
public class UserEntity{

    @Id
    private String id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private List<String> roles;

}
