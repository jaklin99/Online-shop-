package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.CategoryRepository;
import com.example.accessingdatamysql.modelsTemp.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public List<Category> findAll() {
        return null;
    }

    @Override
    public Optional<Category> findByName(String name) {
        return Optional.empty();
    }

    @Override
    public Optional<Category> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public boolean existsByName(String name) {
        return false;
    }

    @Override
    public void deleteByName(String name) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public Category save(Category category) {
        return null;
    }
}
