package com.projectbase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.projectbase.entity.ProductEntity;
import com.projectbase.entity.UserEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Long>{

}
