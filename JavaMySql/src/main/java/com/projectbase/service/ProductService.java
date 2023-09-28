package com.projectbase.service;

import java.sql.SQLException;

import com.projectbase.model.Product;

public interface ProductService{

    Long create(Product product);

    void update(Product product) throws SQLException;

    void updateAmount(Product product);
}
