package com.projectbase.factory;

import java.util.EnumMap;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.projectbase.service.UserCreationService;

import lombok.Data;

@Data
@Component
public class UserCreationFactory{

    private EnumMap<AuthProvider, UserCreationService> mapUserCreationServices;

    @Autowired
    @Qualifier("userServiceImpl")
    private UserCreationService userServiceImpl;

    @Autowired
    @Qualifier("customUserDetailsService")
    private UserCreationService customUserDetailsService;

    @PostConstruct
    public void initiate(){
        mapUserCreationServices = new EnumMap<>(AuthProvider.class);
        mapUserCreationServices.put(AuthProvider.local, userServiceImpl);
        mapUserCreationServices.put(AuthProvider.google, customUserDetailsService);
    }

    public UserCreationService getUserCreationService(AuthProvider authProvider){
        return mapUserCreationServices.get(authProvider);
    }
}
