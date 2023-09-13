package com.projectbase.config.security.oauth2.user;

import com.projectbase.exception.OAuth2AuthenticationProcessingException;
import com.projectbase.factory.AuthProvider;

import java.util.Map;

public class OAuth2UserInfoFactory{

    private OAuth2UserInfoFactory(){
        // hide
    }

    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(AuthProvider.google.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}