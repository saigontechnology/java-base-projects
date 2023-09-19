package com.projectbase.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.projectbase.entity.RoleEntity;

public interface RoleRepository extends JpaRepository<RoleEntity, Long>{

    @Query("SELECT r FROM RoleEntity r WHERE r.name in :names")
    List<RoleEntity> findByNames(@Param("names") List<String> names);
}
