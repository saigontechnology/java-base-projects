package com.projectbase.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class ProductResponse{

    private Long id;

    private String productCategory;

    private String productName;

    private BigDecimal productPrice;

    private Long productAmount;
}
