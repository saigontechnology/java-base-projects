package com.projectbase.service.impl;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.projectbase.entity.ProductEntity;
import com.projectbase.exception.ValidationException;
import com.projectbase.mapper.ProductMapper;
import com.projectbase.model.Product;
import com.projectbase.repository.ProductRepository;
import com.projectbase.service.ProductService;

@Service
public class ProductImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductImplV2 productImplV2;

    @Autowired
    private ProductMapper productMapper;

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    @Override
    public Long create(Product product){
        ProductEntity productEntity = productMapper.productEntity(product);
        productEntity = productRepository.save(productEntity);
        return productEntity.getId();
    }

    @Transactional(rollbackFor = SQLException.class)
    @Override
    public void update(Product product) throws SQLException{
        ProductEntity productEntity = productRepository.findById(product.getId()).orElse(null);

        Product pv2 = new Product();
        pv2.setId(6L);
        pv2.setAmount(product.getAmount());
        productImplV2.updateAmount(pv2);

        productEntity.setName(product.getName());

        throw new SQLException("cannot update");
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    @Override
    public void updateAmount(Product product){
        ProductEntity productEntity = productRepository.findById(product.getId()).orElse(null);
        productEntity.setAmount(product.getAmount());
    }
}
