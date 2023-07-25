package com.projectbase.validator;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.projectbase.dto.Error;
import com.projectbase.dto.ErrorCodes;
import com.projectbase.dto.UserRequest;
import com.projectbase.factory.Utility;
import com.projectbase.factory.ValidationType;

import liquibase.util.StringUtil;

@Component
public class UserCreationValidator implements Validator<UserRequest>{

    private static final String VALID_EMAIL_ADDRESS_REGEX = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

    private static final String VALID_PASSWORD_REGEX = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$";

    @Override
    public ValidationType getType(){
        return ValidationType.USER_CREATION;
    }

    @Override
    public List<Error> validate(UserRequest userRequest){

        List<Error> errors = checkRequiredData(userRequest);
        if(!errors.isEmpty()){
            return errors;
        }

        return checkLogic(userRequest);
    }

    private List<Error> checkRequiredData(UserRequest userRequest){
        List<Error> errors = new ArrayList<>();

        if(StringUtil.isEmpty(userRequest.getEmail())){
            errors.add(new Error(ErrorCodes.CREATE_USER_INVALID_EMAIL.toString()));
        }

        if(StringUtil.isEmpty(userRequest.getPassword())){
            errors.add(new Error(ErrorCodes.CREATE_USER_MISSING_PASSWORD.toString()));
        }

        if(StringUtil.isEmpty(userRequest.getConfirmedPassword())){
            errors.add(new Error(ErrorCodes.CREATE_USER_MISSING_CONFIRMED_PASSWORD.toString()));
        }

        return errors;
    }

    private List<Error> checkLogic(UserRequest userRequest){
        List<Error> errors = new ArrayList<>();

        if(!validateEmail(userRequest.getEmail())){
            errors.add(new Error(ErrorCodes.CREATE_USER_INVALID_EMAIL.toString()));
        }

        if(!validatePassword(userRequest.getPassword())){
            errors.add(new Error(ErrorCodes.CREATE_USER_INVALID_PASSWORD.toString()));
        }

        if(!userRequest.getPassword().equals(userRequest.getConfirmedPassword())){
            errors.add(new Error(ErrorCodes.CREATE_USER_PASSWORDS_NOT_MATCH.toString()));
        }

        return errors;
    }

    private boolean validateEmail(String email){
        return Utility.patternMatches(email, VALID_EMAIL_ADDRESS_REGEX);
    }

    private boolean validatePassword(String password){
        return Utility.patternMatches(password, VALID_PASSWORD_REGEX);
    }
}
