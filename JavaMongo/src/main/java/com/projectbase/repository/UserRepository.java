package com.projectbase.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.projectbase.entity.UserEntity;

public interface UserRepository extends MongoRepository<UserEntity, String>{

    @Query("{'email': ?0}")
    UserEntity findByEmail(String email);
}
