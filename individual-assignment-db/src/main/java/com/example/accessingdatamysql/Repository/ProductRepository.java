package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Product;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ProductRepository extends CrudRepository<Product, Long> {

    Optional<Product> findByName(String name);
    boolean existsByName(String name);
    void deleteByName(String name);
}
