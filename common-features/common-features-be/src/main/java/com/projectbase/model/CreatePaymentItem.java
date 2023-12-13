package com.projectbase.model;

import lombok.Data;

@Data
public class CreatePaymentItem{

    private Long productId;

    private Long amount;

    private Long price;
}
