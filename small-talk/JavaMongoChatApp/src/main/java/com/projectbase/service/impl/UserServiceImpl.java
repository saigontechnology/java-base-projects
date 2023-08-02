package com.projectbase.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.projectbase.model.MyUserDetail;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.projectbase.entity.UserEntity;
import com.projectbase.exception.ValidationException;
import com.projectbase.mapper.UserMapper;
import com.projectbase.model.User;
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

    @Override
    @Transactional
    public User create(User user){
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        UserEntity userEntity = userMapper.toUserEntity(user);

        userEntity.setPassword(encryptedPassword);

        UserEntity createdUserEntity = userRepository.save(userEntity);
        return userMapper.fromUserEntity(createdUserEntity);
    }

    @Override
    public List<User> findAll(){
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities.stream().map(userMapper::fromUserEntity).collect(Collectors.toList());
    }

    @Override
    public Optional<User> findById(String id){
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

        userRepository.save(userEntity);
        return true;
    }

    @Override
    public User getCurrentUser() {
        UserEntity userEntity = ((MyUserDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserEntity();
        return userMapper.fromUserEntity(userEntity);
    }
}
