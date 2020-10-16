package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.UserRepository;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Optional;

@Controller	// This means that this class is a Controller
@RequestMapping(path="/user")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {
	@Autowired
	private UserRepository userRepository;


	@GetMapping("/greeting")
	public @ResponseBody String greeting(@RequestParam(name = "name", required = false, defaultValue = "There") String name, Model model) {
		model.addAttribute("name", name);
		return "<h1> Hello, "+ name+ "</h1>";
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}

//	@GetMapping("/{userId}")
//	public ResponseEntity<User> getUserById(@PathVariable("userId") long id) {
//		Optional<User> userInfo = userRepository.findById(id);
//		return userInfo.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//	}

	@GetMapping("/{email}")
			public ResponseEntity<User> getUserByEmail(@PathVariable("email")String email){
		Optional<User> userEmail = userRepository.findByEmail(email);
		return userEmail.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	@PostMapping("/add")
	public ResponseEntity<User> addNewUser(@RequestBody User user) {
		userRepository.save(user);
		return new ResponseEntity<User>(HttpStatus.CREATED);
	}

//	@PutMapping("/{userId}/update")
//	public ResponseEntity<User> updateUser(@PathVariable long userId, @RequestBody User updatedUser) {
//		if (userRepository.existsById(userId)){
//			userRepository.findById(userId).map(u -> {
//				u.setName(u.getName());
//				u.setEmail(u.getEmail());
//				u.setPassword(u.getPassword());
//				userRepository.save(u);
//				return updatedUser;
//			});
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		}
//		else
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	}
	@PutMapping("/{email}/update")
	public ResponseEntity<User> updateUser(@PathVariable String email, @RequestBody User updatedUser) {
		Optional<User> userInfo = userRepository.findByEmail(email);
		if (userInfo.isPresent()) {
			User user = userInfo.get();
			user.setName(updatedUser.getName());
			user.setEmail(updatedUser.getEmail());
			user.setPassword(updatedUser.getPassword());
			userRepository.save(user);
			return new ResponseEntity<>(user, HttpStatus.NO_CONTENT);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
	@Transactional
	@DeleteMapping("/{email}/delete")
	public ResponseEntity<User> deleteUser(@PathVariable String email){
		if (userRepository.existsByEmail(email)) {
			userRepository.deleteByEmail(email);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	@DeleteMapping("/deleteAll")
	public ResponseEntity<User> deleteAllUsers() {
		userRepository.deleteAll();
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}

