package com.example.servingwebcontent;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.model.User;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @RequestMapping("/users")
        public List<User> getAllUsers(){
            List<User> users = new ArrayList<>();
            users.add(new User(17890, "John Snaw"));
            users.add(new User(17891, "Mark Rocket"));
            users.add(new User(17892, "Matt Dow"));
            users.add(new User(27890, "Jane Snaw"));
            users.add(new User(27891, "Marry Rocket"));
            users.add(new User(27892, "Marian Dow"));
            return users;
        }

    @GetMapping("users/male")
    public List<User> getAllMaleUsers() {
        List<User> users = new ArrayList<>();
        users.add(new User(17890, "John Snaw"));
        users.add(new User(17891, "Mark Rocket"));
        users.add(new User(17892, "Matt Dow"));
        return users;
    }
    @GetMapping("users/female")
    public List<User> getAllFemaleUsers() {
        List<User> users = new ArrayList<>();
        users.add(new User(27890, "Jane Snaw"));
        users.add(new User(27891, "Marry Rocket"));
        users.add(new User(27892, "Marian Dow"));
        return users;
    }
}
