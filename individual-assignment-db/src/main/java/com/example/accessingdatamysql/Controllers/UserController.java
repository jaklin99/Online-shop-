package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Services.IUserService;
import com.example.accessingdatamysql.modelsTemp.Greeting;
import com.example.accessingdatamysql.modelsTemp.HelloMessage;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.HtmlUtils;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Controller    // This means that this class is a Controller
@RequestMapping(path = "/user")
@CrossOrigin(origins = "*")
@PreAuthorize("hasRole('ADMIN')")
public class UserController {

    @Autowired
    private IUserService userService;

    @Autowired
    PasswordEncoder encoder;

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    List<User> getAllUsers() {
        return userService.findAll();
    }

//	@GetMapping("/{userId}")
//	public ResponseEntity<User> getUserById(@PathVariable("userId") long id) {
//		Optional<User> userInfo = userRepository.findById(id);
//		return userInfo.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//	}

    @Transactional
    @GetMapping("/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
        Optional<User> userEmail = userService.findByEmail(email);
        return userEmail.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<User> addNewUser(@RequestBody User user) {
        User fromDb = userService.save(user);
        return new ResponseEntity<User>(fromDb, HttpStatus.CREATED);
    }

    @Transactional
    @PutMapping("/{email}/update") //business logic
    public ResponseEntity<User> updateUser(@PathVariable String email, @RequestBody User updatedUser) {
        Optional<User> userInfo = userService.findByEmail(email);
        if (userInfo.isPresent()) {
            User user = userInfo.get();
            user.setName(updatedUser.getName());
            user.setAddress(updatedUser.getAddress());
            user.setPhone(updatedUser.getPhone());
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setPassworda(encoder.encode(updatedUser.getPassword()));
            System.out.println(updatedUser);
            userService.save(user);
            return new ResponseEntity<>(user, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @Transactional
    @DeleteMapping("/{email}/delete")
    public ResponseEntity<User> deleteUser(@PathVariable String email) {
        if (userService.existsByEmail(email)) {
            userService.deleteByEmail(email);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<User> deleteAllUsers() {
        userService.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

