package com.projectbase.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class UserResponse{

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private List<String> roles;
}
