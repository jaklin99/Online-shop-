package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.UserRepository;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> findByEmail(String email){
        return userRepository.findByEmail(email);
    }
    @Override
    public boolean existsByEmail(String email){
        //userRepository.existsByEmail(email);
        return true;
    }
    @Override
    public boolean existsById(Long id){
        return userRepository.existsById(id);
    }
    @Override
    public void deleteByEmail(String email){
        userRepository.deleteByEmail(email);
    }
    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
    @Override
    public void deleteAll() {
        userRepository.deleteAll();
    }
    @Override
    public User save(User user){
        userRepository.save(user);
        return user;
    }

    @Override
    public User getOne(Long id) {
        return userRepository.getOne(id);
    }
}
