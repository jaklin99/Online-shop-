package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.PurchaseRepository;
import com.example.accessingdatamysql.modelsTemp.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("purchase")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PurchaseController {
    @Autowired
    private PurchaseRepository purchaseRepository;

    @PostMapping("/add")
    public ResponseEntity<Purchase> addPurchase(@RequestBody Purchase purchase){
         purchaseRepository.save(purchase);
        return new ResponseEntity<Purchase>(purchase, HttpStatus.OK);
    }
}
