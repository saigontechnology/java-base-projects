package com.projectbase.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.projectbase.dto.ResponseDto;
import com.projectbase.model.Product;
import com.projectbase.service.ProductService;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/products/")
@Slf4j
public class ProductController{

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<ResponseDto<Long>> createProduct(@RequestBody Product product) {

        log.info("create product with data: " + product);

        Long productId = productService.create(product);

        return ResponseEntity.ok(ResponseDto.response(productId));
    }

    @PutMapping
    public ResponseEntity<ResponseDto<Boolean>> updateProduct(@RequestBody Product product) throws SQLException{

        log.info("update product with data: " + product);

        productService.update(product);

        return ResponseEntity.ok(ResponseDto.response(Boolean.TRUE));
    }
}
