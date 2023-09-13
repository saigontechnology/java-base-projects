package com.projectbase.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.projectbase.factory.AuthProvider;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class User{

    private Long id;

    private String fullName;

    private String email;

    private String password;

    private Boolean emailVerified;

    private AuthProvider provider;

    private String providerId;

    private String imageUrl;

    private List<String> roles;
}
