package com.projectbase.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.projectbase.entity.ProductEntity;
import com.projectbase.exception.ValidationException;
import com.projectbase.mapper.ProductMapper;
import com.projectbase.model.Product;
import com.projectbase.repository.ProductRepository;
import com.projectbase.service.ProductService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;

    private final ProductMapper productMapper;

    @Override
    public Product create(Product product){
        ProductEntity productEntity = productMapper.toProductEntity(product);
        ProductEntity newlyEntity = productRepository.save(productEntity);
        return productMapper.fromProductEntity(newlyEntity);
    }

    @Override
    public List<Product> findAll(){
        List<ProductEntity> productEntities = productRepository.findAll();
        return productEntities.stream().map(productMapper::fromProductEntity).collect(Collectors.toList());
    }

    @Override
    public Optional<Product> findById(Long id){
        Optional<ProductEntity> optEntity = productRepository.findById(id);
        if(!optEntity.isPresent()){
            return Optional.empty();
        }

        Product product = productMapper.fromProductEntity(optEntity.get());
        return Optional.of(product);
    }

    @Override
    public boolean update(Product product){
        Optional<ProductEntity> optProduct = productRepository.findById(product.getId());
        if(!optProduct.isPresent()){
            throw new ValidationException("Product with id "+product.getId()+" not found");
        }

        ProductEntity productEntity = optProduct.get();
        productEntity.setProductName(product.getProductName());

        return productRepository.save(productEntity) != null;
    }
}
