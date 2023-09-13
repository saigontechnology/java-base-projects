package com.projectbase.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class User{

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;
}
