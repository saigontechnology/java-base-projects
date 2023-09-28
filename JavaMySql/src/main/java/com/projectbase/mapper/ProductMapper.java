package com.projectbase.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import com.projectbase.entity.ProductEntity;
import com.projectbase.model.Product;

@Component
@Mapper(componentModel = "spring")
public interface ProductMapper{

    ProductEntity productEntity(Product product);
}
