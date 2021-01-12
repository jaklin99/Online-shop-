package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.PurchaseRepository;
import com.example.accessingdatamysql.modelsTemp.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PurchaseService implements IPurchaseService{
    @Autowired
    private PurchaseRepository purchaseRepository;

    @Override
    public List<Purchase> findAll() {
        return purchaseRepository.findAll();
    }

    @Override
    public Optional<Purchase> findById(Long id) {
        return purchaseRepository.findById(id);
    }

    @Override
    public Purchase save(Purchase purchase) {
         purchaseRepository.save(purchase);
        return purchase;
    }
}
