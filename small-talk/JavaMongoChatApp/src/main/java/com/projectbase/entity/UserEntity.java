package com.projectbase.entity;

import java.util.List;

import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@EqualsAndHashCode(callSuper = true)
@Data
@Document(collection = "users")
public class UserEntity extends AbstractEntity{

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private List<String> roles;

}
