package com.projectbase.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import com.projectbase.dto.ProductRequest;
import com.projectbase.dto.ProductResponse;
import com.projectbase.entity.ProductEntity;
import com.projectbase.model.Product;

@Component
@Mapper(componentModel = "spring")
public interface ProductMapper{

    ProductEntity toProductEntity(Product product);

    Product fromProductEntity(ProductEntity product);

    Product toProduct(ProductRequest productRequest);

    ProductResponse fromProduct(Product product);
}
