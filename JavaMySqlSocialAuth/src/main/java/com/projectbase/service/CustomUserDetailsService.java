package com.projectbase.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projectbase.config.security.UserPrincipal;
import com.projectbase.entity.RoleEntity;
import com.projectbase.entity.UserEntity;
import com.projectbase.factory.UserRole;
import com.projectbase.mapper.UserMapper;
import com.projectbase.model.User;
import com.projectbase.repository.RoleRepository;
import com.projectbase.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService, UserCreationService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("User not found with email : " + email);
        }

        return new UserPrincipal(user).build();
    }

    @Override
    public UserEntity create(User user){

        UserEntity userEntity = userMapper.toUserEntity(user);

        List<RoleEntity> roleEntities = roleRepository.findByNames(List.of(UserRole.USER.toString()));

        userEntity.setRoles(roleEntities);

        return userRepository.save(userEntity);
    }
}
