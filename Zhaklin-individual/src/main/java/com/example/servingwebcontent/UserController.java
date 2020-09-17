package com.example.servingwebcontent;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.repository.Database;
import service.model.User;

import java.util.ArrayList;
import java.util.List;

//@RequestMapping("/users")
@RestController
public class UserController {
    private static Database db = new Database();

    @RequestMapping("/users")
    public List<User> getAllUsers() {
        return db.getUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") int id) {
        return db.getUserById(id);
    }

    @PostMapping("/users/{user}")
    public ResponseEntity createUser(@RequestBody User newUser) {
        if (db.addUser(newUser))
            return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }
//    @PutMapping("/users/{id}")
//    User replaceUser(@RequestBody User newEmployee, @PathVariable int id) {
//
//        return db.getUserById(id);
//
//    }
    @PutMapping("/users")
    public void updateUser(@PathVariable("user") User user) {
    db.updateUser(user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") int id) throws Exception {
        db.deleteUserById(id);
    }
}
