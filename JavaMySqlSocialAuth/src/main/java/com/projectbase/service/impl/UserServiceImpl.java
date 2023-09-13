package com.projectbase.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.projectbase.entity.RoleEntity;
import com.projectbase.entity.UserEntity;
import com.projectbase.exception.ValidationException;
import com.projectbase.factory.AuthProvider;
import com.projectbase.mapper.UserMapper;
import com.projectbase.model.User;
import com.projectbase.repository.RoleRepository;
import com.projectbase.repository.UserRepository;
import com.projectbase.service.UserCreationService;
import com.projectbase.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Service("userServiceImpl")
@Slf4j
public class UserServiceImpl implements UserService, UserCreationService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    @Transactional
    public UserEntity create(User user){

        user.setProvider(AuthProvider.local);

        UserEntity userEntity = userMapper.toUserEntity(user);

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        userEntity.setPassword(encryptedPassword);

        List<RoleEntity> roles = roleRepository.findByNames(user.getRoles());
        userEntity.setRoles(roles);

        userEntity.setProvider(AuthProvider.local);

        return userRepository.save(userEntity);
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
        userEntity.setFullName(user.getFullName());

        return userRepository.save(userEntity) != null;
    }

    @Override
    public Boolean existsByEmail(String email){
        return userRepository.existsByEmail(email);
    }
}
