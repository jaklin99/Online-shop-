//package com.example.accessingdatamysql.Controllers;
//
//
//import com.example.accessingdatamysql.Services.OrderDetailsService;
//import com.example.accessingdatamysql.Services.OrderService;
//import com.example.accessingdatamysql.Services.UserService;
//import com.example.accessingdatamysql.modelsTemp.Order;
//import com.example.accessingdatamysql.modelsTemp.OrderStatus;
//import com.example.accessingdatamysql.modelsTemp.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.web.bind.annotation.*;
//
//import javax.transaction.Transactional;
//import java.time.LocalDateTime;
//import java.util.List;
//
//@CrossOrigin(origins = "*", maxAge = 3600)
//@RestController
//@RequestMapping("/orders")
//@PreAuthorize("hasRole('USER')")
//public class OrderController {
//    @Autowired
//    private OrderService orderService;
//    @Autowired
//    private OrderDetailsService orderDetailsService;
//    @Autowired
//    private UserService userService;
//    @GetMapping("/processing")
//    @PreAuthorize("hasRole('MODERATOR')")
//    public List<Order> getAllProcessingOrders() {
//        return  orderService.getAllPendingOrders();
//    }
//    @GetMapping("/received")
//    @PreAuthorize("hasRole('MODERATOR')")
//    public List<Order> getCollectedOrders() {
//        return orderService.getAllCollectedOrders();
//    }
//    @GetMapping("/{id}")
//    public ResponseEntity<Order> getOrderById(@PathVariable long id) {
//        if (orderService.existsById(id))
//            if (orderService.findById(id).isPresent())
//                return new ResponseEntity(orderService.findById(id), HttpStatus.OK);
//            else return new ResponseEntity(HttpStatus.FORBIDDEN);
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//    @GetMapping("/delivery/{id}")
//    @PreAuthorize("hasRole('MODERATOR')")
//    public ResponseEntity<Order> getOrderByIdForDelivery(@PathVariable long id) {
//        if (orderService.existsById(id))
//            if (orderService.findById(id).isPresent())
//                return new ResponseEntity(orderService.findById(id), HttpStatus.OK);
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//    @PostMapping("/send/{id}")
//    @PreAuthorize("hasRole('MODERATOR')")
//    public ResponseEntity sendOrder(@PathVariable long id, @RequestBody Order givenOrderInfo) {
//        if (orderService.existsById(id)) {
//            Order order = orderService.getOne(id);
//            order.setStatusOrder(givenOrderInfo.getStatusOrder());
//            orderService.save(order);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//    @PostMapping("/deliver/{id}")
//    @PreAuthorize("hasRole('MODERATOR')")
//    public ResponseEntity deliverOrder(@PathVariable long id, @RequestBody Order givenOrderInfo) {
//        if (orderService.existsById(id)) {
//            Order order = orderService.getOne(id);
//            order.setStatusOrder(givenOrderInfo.getStatusOrder());
//            order.setDeliverredDate(LocalDateTime.now());
//            orderService.save(order);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//    @PostMapping("/user")
//    public @ResponseBody
//    ResponseEntity<List<Order>> getAllSubmittedOrdersByUser(@RequestBody User user) {
//        List<Order> orders = orderService.getAllSubmittedOrdersByUserId(user.getId());
//        if (orders.isEmpty())
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        else return new ResponseEntity<>(orders, HttpStatus.OK);
//    }
//    @PostMapping("/{id}/cancel")
//    public ResponseEntity cancelOrder(@PathVariable long id, @RequestBody User user) {
//        if (orderService.existsById(id)) {
//            long userId = user.getId();
//            Order order = orderService.getOne(id);
//            if (order.getUser().getId() == userId) {
//                order.setStatusOrder(OrderStatus.CANCELLED);
//                orderService.save(order);
//                return new ResponseEntity<>(HttpStatus.OK);
//            } else return new ResponseEntity<>(HttpStatus.FORBIDDEN);
//        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//    @PostMapping("/cart")
//    public ResponseEntity<Order> getCart(@RequestBody User user) {
//        if (orderService.getUserShoppingCart(user.getId()) == null)
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        else {
//            Order cart = orderService.getUserShoppingCart(user.getId());
//            if (cart.getUser().getId().equals(user.getId())) {
//                return new ResponseEntity<>(cart, HttpStatus.OK);
//            } else return new ResponseEntity<>(HttpStatus.FORBIDDEN);
//        }
//    }
////    @PutMapping("/cart")
////    public ResponseEntity<Order> submitOrder(@RequestBody Order order) {
////        if (orderService.existsById(order.getId())) {
////            order.setOrderDate(LocalDateTime.now());
////            order.setStatusOrder(OrderStatus.PENDING);
////            User user = userService.getOne(order.getUser().getId());
////            user.setTotalCosts(user.getTotalCosts() + order.getTotalPrice());
////            userService.save(user);
////            orderService.save(order);
////            return new ResponseEntity<>(HttpStatus.OK);
////        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////    }
////    @PostMapping("/cart/count")
////    public ResponseEntity countItemsInCart(@RequestBody User givenUser) {
////        if (userService.existsByEmail(givenUser.getEmail())) {
////            User user = userService.getOne(givenUser.getId());
////            Order cart = orderService.getUserShoppingCart(user.getId());
////            int numCartItems;
////            if (cart == null) {
////                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
////            } else {
////                numCartItems = cart.getOrderDetails().size();
////                return new ResponseEntity<>(numCartItems, HttpStatus.OK);
////            }
////        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////    }
//    @PostMapping("/clearCart")
//    @Transactional
//    public ResponseEntity clearCart(@RequestBody User user) {
//        if (orderService.existsById(orderService.getUserShoppingCart(user.getId()).getId())) {
//            Order order = orderService.getUserShoppingCart(user.getId());
//            if (order.getUser().getId().equals(user.getId())) {
//                orderDetailsService.deleteAllByOrder_OrderId(order.getId());
//                order.setTotalPrice(0);
//                orderService.save(order);
//                return new ResponseEntity<>(HttpStatus.OK);
//            } else return new ResponseEntity<>(HttpStatus.FORBIDDEN);
//        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//}