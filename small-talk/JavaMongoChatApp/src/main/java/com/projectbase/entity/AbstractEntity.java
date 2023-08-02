package com.projectbase.entity;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;

@Data
public abstract class AbstractEntity {
    @Id
    public String id;

    @CreatedDate
    public Date createdAt;

    @LastModifiedDate
    public Date updatedAt;
}
