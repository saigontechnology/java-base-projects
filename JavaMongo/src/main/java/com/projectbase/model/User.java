package com.projectbase.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class User{

    private String id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private List<String> roles;
}
