package com.projectbase.service;

import java.util.List;
import java.util.Optional;

import com.projectbase.model.Product;

public interface ProductService{

    Product create(Product product);

    List<Product> findAll();

    Optional<Product> findById(Long id);

    boolean update(Product product);
}
