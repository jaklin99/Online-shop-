package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.UserRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Product;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller	// This means that this class is a Controller
@RequestMapping(path="/user")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	@GetMapping("/greeting")
	public @ResponseBody String greeting(@RequestParam(name = "name", required = false, defaultValue = "There") String name, Model model) {
		model.addAttribute("name", name);
		return "<h1> Hello, "+ name+ "</h1>";
	}

	@PostMapping(path="/add") // Map ONLY POST Requests
	public @ResponseBody User addNewUser (@RequestBody User user) {
		userRepository.save(user);
		return user;
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}

	@PutMapping("/{id}/update")
	public User updateProduct(@PathVariable long userId, @RequestBody User userRequest) {
		return userRepository.findById(userId).map(user -> {
				user.setUserName(userRequest.getUserName());
				user.setUserNumber(userRequest.getUserNumber());
				return userRepository.save(user);
		}).orElseThrow(() -> new ResourceNotFoundException("UserId " + userId + " not found"));
	}

	@DeleteMapping("/{id}/delete")
	public void deleteUser(@PathVariable("id") long id) throws Exception {
		userRepository.deleteById(id);
	}
}
