package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.modelsTemp.Purchase;

import java.util.List;
import java.util.Optional;

public interface IPurchaseService {
    List<Purchase> findAll();
    Optional<Purchase> findById(Long id);
    Purchase save(Purchase purchase);
}
