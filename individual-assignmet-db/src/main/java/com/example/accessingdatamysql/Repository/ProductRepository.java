package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
