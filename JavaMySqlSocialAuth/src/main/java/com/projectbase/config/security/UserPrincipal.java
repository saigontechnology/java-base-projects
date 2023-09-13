package com.projectbase.config.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.projectbase.entity.RoleEntity;
import com.projectbase.entity.UserEntity;

import lombok.Data;

@Data
public class UserPrincipal implements OAuth2User, UserDetails {
    private Long id;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private transient Map<String, Object> attributes;
    private transient UserEntity userEntity;

    public UserPrincipal(UserEntity userEntity){
        this.userEntity = userEntity;
    }

    public UserPrincipal(Long id, String email, String password, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }

    public UserPrincipal build() {
        List<RoleEntity> roles = userEntity.getRoles();
        List<GrantedAuthority> customAuthority = roles.stream().map(r -> new SimpleGrantedAuthority(r.getName())).collect(Collectors.toList());
        return new UserPrincipal(userEntity.getId(), userEntity.getEmail(), userEntity.getPassword(), customAuthority);
    }

    public UserPrincipal build(Map<String, Object> attributes) {
        UserPrincipal userPrincipal = build();
        userPrincipal.setAttributes(attributes);
        return userPrincipal;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public String getName() {
        return String.valueOf(id);
    }
}