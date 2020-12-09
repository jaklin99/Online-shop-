package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.modelsTemp.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<User> findAll();
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    boolean existsById(Long id);
    void deleteByEmail(String email);
    void deleteAll();
    User save(User user);
    User getOne(Long id);
}
