package com.projectbase.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.projectbase.entity.ProductEntity;
import com.projectbase.mapper.ProductMapper;
import com.projectbase.model.Product;
import com.projectbase.repository.ProductRepository;
import com.projectbase.service.ProductService;

@Component
public class ProductImplV2{

    @Autowired
    private ProductRepository productRepository;

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void updateAmount(Product product){
        ProductEntity productEntity = productRepository.findById(product.getId()).orElse(null);
        productEntity.setAmount(product.getAmount());
    }
}
