package com.projectbase.validator;

import java.util.List;

import com.projectbase.dto.Error;
import com.projectbase.factory.ValidationType;

public interface Validator<T>{

    ValidationType getType();

    List<Error> validate(T data);
}
