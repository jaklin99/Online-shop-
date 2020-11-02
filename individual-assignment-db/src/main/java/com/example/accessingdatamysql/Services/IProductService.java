package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.modelsTemp.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findAll();
    Optional<Product> findByName(String name);
    boolean existsByName(String name);
    void deleteByName(String name);
    void deleteAll();
    Product save(Product product);
}
