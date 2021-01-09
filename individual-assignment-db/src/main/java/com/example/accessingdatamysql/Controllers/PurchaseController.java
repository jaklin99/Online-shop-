package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.PurchaseRepository;
import com.example.accessingdatamysql.Services.UserService;
import com.example.accessingdatamysql.modelsTemp.OrderStatus;
import com.example.accessingdatamysql.modelsTemp.Purchase;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("purchase")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PurchaseController {
    @Autowired
    private PurchaseRepository purchaseRepository;
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<Purchase> addPurchase(@RequestBody Purchase purchase) {
        Purchase order = new Purchase();
        User user = userService.getOne(purchase.getUser().getId());
        order.setAddress(user.getAddress());
        order.setStatusOrder(OrderStatus.PENDING);
        userService.save(user);
        purchaseRepository.save(purchase);
        return new ResponseEntity<Purchase>(purchase, HttpStatus.OK);
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    List<Purchase> getOrders() {
        return purchaseRepository.findAll();
    }
    @Transactional
    @GetMapping("/{id}")
    public ResponseEntity<Purchase> getPurchaseById(@PathVariable("id") Long id) {
        Optional<Purchase> purchaseId = purchaseRepository.findById(id);
        return purchaseId.map(p -> new ResponseEntity<>(p, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
