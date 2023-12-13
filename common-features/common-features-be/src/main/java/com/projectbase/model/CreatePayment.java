package com.projectbase.model;

import java.util.List;

import lombok.Data;

@Data
public class CreatePayment{

    private List<CreatePaymentItem> paymentItems;
}
