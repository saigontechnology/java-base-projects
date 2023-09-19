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
public class UserUpdatingValidator implements Validator<UserRequest>{

    private static final String NAME_REGEX = "^[a-zA-Z0-9]+$";

    @Override
    public ValidationType getType(){
        return ValidationType.USER_UPDATING;
    }

    @Override
    public List<Error> validate(UserRequest userRequest){
        List<Error> errors = new ArrayList<>();

        if(!StringUtil.isEmpty(userRequest.getFirstName()) && !Utility.patternMatches(userRequest.getFirstName(), NAME_REGEX)){
            errors.add(new Error(ErrorCodes.UPDATE_USER_INVALID_FIRST_NAME.toString()));
        }

        if(!StringUtil.isEmpty(userRequest.getLastName()) && !Utility.patternMatches(userRequest.getLastName(), NAME_REGEX)){
            errors.add(new Error(ErrorCodes.UPDATE_USER_INVALID_LAST_NAME.toString()));
        }

        return errors;
    }
}
