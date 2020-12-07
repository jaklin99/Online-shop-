//package com.example.accessingdatamysql.Controllers;
//import com.example.accessingdatamysql.Services.OrderDetailsService;
//import com.example.accessingdatamysql.Services.OrderService;
//import com.example.accessingdatamysql.Services.UserService;
//import com.example.accessingdatamysql.modelsTemp.*;
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
//public class OrderDetailsController {
//    @Autowired
//    private OrderDetailsService orderDetailsService;
//    @Autowired
//    private OrderService orderService;
//    @Autowired
//    private UserService userService;
//
//    @GetMapping("/{id}/details")
//    public ResponseEntity<OrderDetails> getDetailsOfOrderById(@PathVariable long id) {
//        if (orderService.existsById(id)) {
//            if (orderDetailsService.getAllByOrder_OrderId(id).size() != 0)
//                return new ResponseEntity(orderDetailsService.getAllByOrder_OrderId(id), HttpStatus.OK);
//            else return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//
//    //    @PostMapping("/addProduct")
////    public ResponseEntity<OrderDetails> addProductToCart(@RequestBody OrderDetails orderDetails) {
////        if (userService.existsByEmail(orderDetails.getBuyerEmail())) {
////            User buyer = userService.getOne(orderDetails.getBuyerEmail());
////            Order cart = orderService.getUserShoppingCart(orderDetails.getBuyerEmail());
////            if (cart == null) {
////                cart = new Order();
////                cart.setUser(buyer);
////                orderService.save(cart);
////            }
////            orderDetails.setPrice(orderDetails.getProduct().getPrice());
////            double amount = Math.round((orderDetails.getPrice() * orderDetails.getQuantity()) * 100.0) / 100.0;
////            orderDetails.setAmount(amount);
////            orderDetails.setOrder(cart);
////            double orderTotalPrice = Math.round((cart.getTotalPrice() + amount) * 100.0) / 100.0;
////            cart.setTotalPrice(orderTotalPrice);
////            orderService.save(cart);
////            orderDetailsService.save(orderDetails);
////            return new ResponseEntity<>(orderDetails, HttpStatus.OK);
////        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////    }
//    @DeleteMapping("/deleteProduct/{id}")
//    public ResponseEntity<Product> deleteProduct(@PathVariable long id) {
//        if (orderDetailsService.existsById(id)) {
//            OrderDetails orderDetails = orderDetailsService.getOne(id);
//            Order order = orderDetails.getOrder();
//            double newOrderTotalPrice = order.getTotalPrice() - orderDetails.getAmount();
//            order.setTotalPrice(newOrderTotalPrice);
//            orderService.save(order);
//            orderDetailsService.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//}