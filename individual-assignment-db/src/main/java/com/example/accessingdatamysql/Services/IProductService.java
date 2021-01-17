package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.modelsTemp.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findAll();
    Optional<Product> findByName(String name);
    Optional<Product> findById(Long id);
    boolean existsById(Long productId);
    void deleteById(Long productId);
    void deleteAll();
    Product save(Product product);
    //List<Product>getAllProductsByCategoryId(Long id);
}
