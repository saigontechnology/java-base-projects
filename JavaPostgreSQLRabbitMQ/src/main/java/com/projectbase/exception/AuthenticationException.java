package com.projectbase.exception;

public class AuthenticationException extends RuntimeException{

    public AuthenticationException(String message, Throwable e){
        super(message, e);
    }
}
