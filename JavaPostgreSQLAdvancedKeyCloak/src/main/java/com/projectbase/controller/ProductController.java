package com.projectbase.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.projectbase.dto.Error;
import com.projectbase.dto.ProductRequest;
import com.projectbase.dto.ProductResponse;
import com.projectbase.dto.ResponseDto;
import com.projectbase.factory.ValidationType;
import com.projectbase.mapper.ProductMapper;
import com.projectbase.model.Product;
import com.projectbase.service.ProductService;
import com.projectbase.validator.ValidatorProvider;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/products/")
@Slf4j
public class ProductController{

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private ValidatorProvider validatorProvider;

    @PreAuthorize("hasAuthority('ROLE_fm') or hasAuthority('ROLE_pm')")
    @PostMapping
    public ResponseEntity<ResponseDto<Long>> createProduct(@RequestBody ProductRequest productRequest) {

        log.info("create product with data: " + productRequest);

        final List<Error> errors = validatorProvider.execute(ValidationType.PRODUCT_CREATION, productRequest);

        ResponseDto<Long> responseDto = new ResponseDto<>();

        if (!CollectionUtils.isEmpty(errors)) {
            responseDto.setErrors(errors);
            return ResponseEntity.badRequest().body(responseDto);
        }

        Product product = productMapper.toProduct(productRequest);
        Product newlyProduct = productService.create(product);
        return ResponseEntity.ok(ResponseDto.response(newlyProduct.getId()));
    }

    @PreAuthorize("hasAuthority('ROLE_fm')")
    @GetMapping
    public ResponseEntity<ResponseDto<List<ProductResponse>>> findAll() {
        List<Product> products = productService.findAll();
        List<ProductResponse> productResponses = products.stream().map(p -> productMapper.fromProduct(p)).collect(Collectors.toList());
        return ResponseEntity.ok(ResponseDto.response(productResponses));
    }

    @PreAuthorize("hasAuthority('ROLE_fm') or hasAuthority('ROLE_pm')")
    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto<ProductResponse>> findById(@PathVariable Long id) {
        Optional<Product> optProduct = productService.findById(id);
        if(optProduct.isPresent()){
            ProductResponse productResponse = productMapper.fromProduct(optProduct.get());
            return ResponseEntity.ok(ResponseDto.response(productResponse));
        }

        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasAuthority('ROLE_fm')")
    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto<Boolean>> update(@PathVariable Long id,  @RequestBody ProductRequest productRequest) {

        final List<Error> errors = validatorProvider.execute(ValidationType.PRODUCT_UPDATING, productRequest);

        ResponseDto<Boolean> responseDto = new ResponseDto<>();

        if (!CollectionUtils.isEmpty(errors)) {
            responseDto.setErrors(errors);
            return ResponseEntity.badRequest().body(responseDto);
        }

        Product product = productMapper.toProduct(productRequest);
        product.setId(id);

        boolean isUpdated = productService.update(product);
        responseDto.setData(isUpdated);

        return ResponseEntity.ok(responseDto);
    }
}
