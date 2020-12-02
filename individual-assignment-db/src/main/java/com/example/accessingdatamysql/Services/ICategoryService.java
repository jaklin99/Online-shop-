package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.modelsTemp.Category;
import com.example.accessingdatamysql.modelsTemp.Product;

import java.util.List;
import java.util.Optional;

public interface ICategoryService {
    List<Category> findAll();
    Optional<Category> findByName(String name);
    Optional<Category> findById(Long id);
    boolean existsByName(String name);
    void deleteByName(String name);
    void deleteAll();
    Category save(Category category);
}
