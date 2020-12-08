package com.example.accessingdatamysql.Controllers;

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
import java.util.List;
import java.util.Optional;

@Controller    // This means that this class is a Controller
@RequestMapping(path = "/order")
@CrossOrigin(origins = "*")
@PreAuthorize("hasRole('ADMIN')")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private ProductService productService;
    @Autowired
    private UserService userService;

    @GetMapping(path = "/{status}")
    public @ResponseBody
    List<Order> getAllPendingOrders(@PathVariable("status") OrderStatus status) {
        return orderService.findAllByStatus(OrderStatus.PENDING);
    }
    @GetMapping(path = "/{status}")
    public @ResponseBody
    List<Order> getAllDeliveredOrders(@PathVariable("status") OrderStatus status) {
        status=OrderStatus.DELIVERED;
        return orderService.findAllByStatus(status);
    }
    @GetMapping(path = "/{status}")
    public @ResponseBody
    List<Order> getAllCancelledOrders(@PathVariable("status") OrderStatus status) {
        status=OrderStatus.CANCELLED;
        return orderService.findAllByStatus(status);
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
    public ResponseEntity<Order> submitOrder(@RequestBody Order order) {
        if (orderService.existsByOrderNr(order.getOrderNr())) {
            order.setOrderDate(LocalDateTime.now());
            order.setStatusOrder(OrderStatus.PENDING);
            User user = userService.getOne();
            user.setTotalCosts(user.getTotalCosts() + order.getTotalPrice());
            //userService.save(user);
            orderService.save(order);
            return new ResponseEntity<>(HttpStatus.OK);
          } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        //return new ResponseEntity<Order>(HttpStatus.CREATED);
    }
    @PutMapping("/{id}/update")
    public ResponseEntity<Order> updateOrder(@PathVariable long id, @RequestBody Order updatedOrder) {
        Optional<Order> orderInfo = orderService.findById(id);
        if (orderInfo.isPresent()) {
            Order order = orderInfo.get();
            order.setStatusOrder(updatedOrder.getStatusOrder());
            order.setOrderDetails(updatedOrder.getOrderDetails());
            order.setDeliverryAddress(updatedOrder.getDeliverryAddress());
            order.setTotalPrice(updatedOrder.getTotalPrice());
            orderService.save(order);
            return new ResponseEntity<>(order, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Transactional
    @DeleteMapping("/{orderNr}/delete")
    public ResponseEntity<Product> cancelOrder(@PathVariable String orderNr){
        if (orderService.existsByOrderNr(orderNr)) {
            orderService.deleteByOrderNr(orderNr);
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
