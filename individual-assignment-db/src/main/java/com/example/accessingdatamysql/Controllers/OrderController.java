//package com.example.accessingdatamysql.Controllers;
//import com.example.accessingdatamysql.Services.OrderService;
//import com.example.accessingdatamysql.modelsTemp.Order;
//import com.example.accessingdatamysql.modelsTemp.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import javax.transaction.Transactional;
//import java.util.List;
//import java.util.Optional;
//
//@Controller    // This means that this class is a Controller
//@RequestMapping(path = "/order")
//@CrossOrigin(origins = "http://localhost:3000")
//
//public class OrderController {
//
//    @Autowired
//    private OrderService orderService;
//
//    @GetMapping(path = "/all")
//    public @ResponseBody
//    List<Order> getAllOrders() {
//        return orderService.findAll();
//    }
//
////	@GetMapping("/{userId}")
////	public ResponseEntity<User> getUserById(@PathVariable("userId") long id) {
////		Optional<User> userInfo = userRepository.findById(id);
////		return userInfo.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
////	}
//
//    @Transactional
//    @GetMapping("/{id}")
//    public ResponseEntity<Order> getUserByEmail(@PathVariable("id") Long id) {
//        Optional<Order> order = orderService.findById(id);
//        return order.map(o -> new ResponseEntity<>(o, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//
//    @PostMapping("/add")
//    public ResponseEntity<Order> addNewOrder(@RequestBody Order order) {
//        //quantity*price
//        Order fromDb = orderService.save(order);
//        return new ResponseEntity<Order>(fromDb, HttpStatus.CREATED);
//    }
//
////    @Transactional
////    @PutMapping("/{email}/update") //business logic
////    public ResponseEntity<User> updateUser(@PathVariable String email, @RequestBody User updatedUser) {
////        Optional<User> userInfo = userService.findByEmail(email);
////        if (userInfo.isPresent()) {
////            User user = userInfo.get();
////            user.setUsername(updatedUser.getUsername());
////            user.setEmail(updatedUser.getEmail());
////            user.setPassword(updatedUser.getPassword());
////            userService.save(user);
////            return new ResponseEntity<>(user, HttpStatus.NO_CONTENT);
////        } else {
////            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////        }
////
////    }
////
////    @Transactional
////    @DeleteMapping("/{email}/delete")
////    public ResponseEntity<User> deleteUser(@PathVariable String email) {
////        if (userService.existsByEmail(email)) {
////            userService.deleteByEmail(email);
////            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
////        }
////        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////    }
////
////    @DeleteMapping("/deleteAll")
////    public ResponseEntity<User> deleteAllUsers() {
////        userService.deleteAll();
////        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
////    }
//}
