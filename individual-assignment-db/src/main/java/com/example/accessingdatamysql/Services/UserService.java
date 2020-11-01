package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.UserRepository;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findUsers(){
       return userRepository.findAll();
    }
    public Optional<User> findByEmail(String email){
        return userRepository.findByEmail(email);
    }
    public boolean existsByEmail(String email){
      userRepository.existsByEmail(email);
        return true;
    }
    public void deleteByEmail(String email){
        userRepository.deleteByEmail(email);
    }
    public void saveUser(User user){
        userRepository.save(user);
    }
}
