package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.UserRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Product;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

	@PostMapping("/add")
	public ResponseEntity<User> addNewUser(@RequestBody User user) {
		userRepository.save(user);
		return new ResponseEntity<User>(HttpStatus.CREATED);
	}

	@PutMapping("/{id}/update")
	public ResponseEntity<User> updateUser(@PathVariable long userId, @RequestBody User updatedUser) {
		if (userRepository.existsById(userId)){
			userRepository.findById(userId).map(u -> {
				u.setUserName(u.getUserName());
				u.setEmail(u.getEmail());
				userRepository.save(u);
				return updatedUser;
			});
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}/delete")
	public ResponseEntity<User> deleteUser(@PathVariable long id){
		if (userRepository.existsById(id)) {
			userRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
