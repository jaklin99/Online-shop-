package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.PurchaseRepository;
import com.example.accessingdatamysql.Services.PurchaseService;
import com.example.accessingdatamysql.Services.UserService;
import com.example.accessingdatamysql.modelsTemp.OrderStatus;
import com.example.accessingdatamysql.modelsTemp.Purchase;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("purchase")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PurchaseController {
    @Autowired
    private PurchaseService purchaseService;
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<Purchase> addPurchase(@RequestBody Purchase purchase) {
        User user = userService.getOne(purchase.getUser().getId());
        purchase.setAddress(user.getAddress());
        purchase.setPurchaseDate(LocalDateTime.now());
        purchase.setStatusOrder(OrderStatus.PENDING);
        userService.save(user);
        purchaseService.save(purchase);
        return new ResponseEntity<Purchase>(purchase, HttpStatus.OK);
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    List<Purchase> getOrders() {
        return purchaseService.findAll();
    }
    @Transactional
    @GetMapping("/{id}")
    public ResponseEntity<Purchase> getPurchaseById(@PathVariable("id") Long id) {
        Optional<Purchase> purchaseId = purchaseService.findById(id);
        return purchaseId.map(p -> new ResponseEntity<>(p, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
//    @PostMapping("/cart/count")
//    public ResponseEntity cartCount(@RequestBody User user) {
//       if(userService.existsById(user.getId())){
//           User new_user = userService.getOne(user.getId());
//           Purchase cart= purchaseRepository.getOne(user.getId());
//           int cartItems;
//           if(cart==null){
//               return new ResponseEntity<Purchase>(HttpStatus.NO_CONTENT);
//           }else{
//               cartItems = cart.getPurchaseDetails().length();
//               return new ResponseEntity<>(cartItems,HttpStatus.OK);
//
//           }
//       }else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }

}
