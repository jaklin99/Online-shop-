package com.example.servingwebcontent;

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

    @PostMapping("/users")
    public User newUser(@RequestBody User newUser) throws Exception {
        return db.addUser(newUser);
    }
    /*@PostMapping
    public void addUser(@RequestBody User user) throws Exception {
        db.addUser(user);
    }*/

//    @PutMapping("/users/{id}")
//    User replaceUser(@RequestBody User newEmployee, @PathVariable int id) {
//
//        return db.getUserById(id);
//
//    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") int id) throws Exception {
        db.deleteUserById(id);
    }
}
