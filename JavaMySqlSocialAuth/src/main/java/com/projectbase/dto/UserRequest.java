package com.projectbase.dto;

import java.util.List;

import com.projectbase.factory.UserRole;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class UserRequest{

    private String email;

    private String fullName;

    private String password;

    private String confirmedPassword;

    // Default role
    private List<String> roles = List.of(UserRole.USER.toString());
}
