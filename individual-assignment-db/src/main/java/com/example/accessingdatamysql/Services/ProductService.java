package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.ProductRepository;
import com.example.accessingdatamysql.modelsTemp.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findByName(String name) {
        return productRepository.findByName(name);
    }

    @Override
    public boolean existsByName(String name) {
        return true;
    }

    @Override
    public void deleteByName(String name) {
        productRepository.deleteByName(name);
    }

    @Override
    public void deleteAll() {
        productRepository.deleteAll();
    }

    @Override
    public Product save(Product product) {
        productRepository.save(product);
        return product;
    }
}
