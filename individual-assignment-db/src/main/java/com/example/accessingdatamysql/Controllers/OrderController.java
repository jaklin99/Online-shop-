package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.OrderRepository;
import com.example.accessingdatamysql.Services.OrderService;
import com.example.accessingdatamysql.Services.ProductService;
import com.example.accessingdatamysql.Services.UserService;
import com.example.accessingdatamysql.modelsTemp.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Controller    // This means that this class is a Controller
@RequestMapping(path = "/order")
@CrossOrigin(origins = "http://localhost:3000")
//@PreAuthorize("hasRole('ADMIN')")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductService productService;
    @Autowired
    private UserService userService;

    @GetMapping(path = "/pending")
    public @ResponseBody
    List<Order> getAllPendingOrders() {
        return orderService.findAllByStatus(OrderStatus.PENDING);
    }
    @GetMapping(path = "/delivered")
    public @ResponseBody
    List<Order> getAllDeliveredOrders() {
        return orderService.findAllByStatus(OrderStatus.DELIVERED);
    }
    @GetMapping(path = "/cancelled")
    public @ResponseBody
    List<Order> getAllCancelledOrders() {
        return orderService.findAllByStatus(OrderStatus.CANCELLED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Long id) {
        Optional<Order> orderInfo = orderService.findById(id);
        return orderInfo.map(o -> new ResponseEntity<>(o, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/add")
    public ResponseEntity<Order> addNewOrder(@RequestBody Order order) {
        //do the status
        orderService.save(order);
        return new ResponseEntity<Order>(HttpStatus.CREATED);
    }
    @PostMapping("/submitOrder")
    public ResponseEntity<OrderDetails[]> submitOrder(@RequestBody OrderDetails[] orderDetails, Long userId, String paymentMethod) {
            Order order= new Order();
            order.setOrderDate(LocalDateTime.now());
            order.setStatusOrder(OrderStatus.PENDING);
            User user =userService.getOne(userId);
            if (user!=null){
                order.setUser(user);
                order.setDeliveryAddress(user.getAddress());
                order.setPaymentMethod(paymentMethod);
                double totalPrice= 0;
                for (OrderDetails orders : orderDetails
                     ) {
                    totalPrice+= orders.getTotalPrice();
                }
                order.setTotalPrice(totalPrice);
                order.setOrderDetails(Arrays.asList(orderDetails));
                user.setTotalCosts(user.getTotalCosts() + order.getTotalPrice());
                userService.save(user);
                orderService.save(order);
                return new ResponseEntity<>(HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
          }
    @PutMapping("/{id}/update")
    public ResponseEntity<Order> updateOrder(@PathVariable long id, @RequestBody Order updatedOrder) {
        //Optional<Order> orderInfo = orderService.findById(id);
        if (orderService.existsById(id)) {
            Order order = orderRepository.getOne(id);
            order.setStatusOrder(updatedOrder.getStatusOrder());
            order.setOrderDetails(updatedOrder.getOrderDetails());
            order.setDeliveryAddress(updatedOrder.getDeliveryAddress());
            order.setTotalPrice(updatedOrder.getTotalPrice());
            orderService.save(order);
            return new ResponseEntity<>(order, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Transactional
    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Product> cancelOrder(@PathVariable Long id){
        if (orderService.existsById(id)) {
            orderService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/deleteAll")
    public ResponseEntity<Product> deleteAllOrders() {
        orderService.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
