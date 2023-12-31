package com.projectbase.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.projectbase.entity.RoleEntity;
import com.projectbase.entity.UserEntity;
import com.projectbase.exception.ValidationException;
import com.projectbase.mapper.UserMapper;
import com.projectbase.model.User;
import com.projectbase.repository.RoleRepository;
import com.projectbase.repository.UserRepository;
import com.projectbase.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    private final PasswordEncoder passwordEncoder;

    private final RoleRepository roleRepository;

    @Override
    @Transactional
    public User create(User user){
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        UserEntity userEntity = userMapper.toUserEntity(user);

        userEntity.setPassword(encryptedPassword);

        List<RoleEntity> roles = roleRepository.findByNames(user.getRoles());
        userEntity.setRoles(roles);

        UserEntity createdUserEntity = userRepository.save(userEntity);
        return userMapper.fromUserEntity(createdUserEntity);
    }

    @Override
    public List<User> findAll(){
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities.stream().map(userMapper::fromUserEntity).collect(Collectors.toList());
    }

    @Override
    public Optional<User> findById(Long id){
        Optional<UserEntity> optEntity = userRepository.findById(id);
        if(!optEntity.isPresent()){
            return Optional.empty();
        }

        User user = userMapper.fromUserEntity(optEntity.get());
        return Optional.of(user);
    }

    @Override
    @Transactional
    public boolean update(User user){

        log.info("Updating user has id {}", user.getId());

        Optional<UserEntity> optEntity = userRepository.findById(user.getId());
        if(!optEntity.isPresent()){
            throw new ValidationException(String.format("Not found user has id %s", user.getId()));
        }

        UserEntity userEntity = optEntity.get();
        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());

        return userRepository.save(userEntity) != null;
    }
}
