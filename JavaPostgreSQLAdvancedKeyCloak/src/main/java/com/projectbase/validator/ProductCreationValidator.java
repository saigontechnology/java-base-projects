package com.projectbase.validator;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.projectbase.dto.Error;
import com.projectbase.dto.ErrorCodes;
import com.projectbase.dto.ProductRequest;
import com.projectbase.factory.ValidationType;

import liquibase.util.StringUtil;

@Component
public class ProductCreationValidator implements Validator<ProductRequest>{

    @Override
    public ValidationType getType(){
        return ValidationType.PRODUCT_CREATION;
    }

    @Override
    public List<Error> validate(ProductRequest productRequest){

        List<Error> errors = new ArrayList<>();

        if(StringUtil.isEmpty(productRequest.getProductName())){
            errors.add(new Error(ErrorCodes.CREATE_PRODUCT_MISSING_NAME.toString()));
        }

        return errors;
    }
}
