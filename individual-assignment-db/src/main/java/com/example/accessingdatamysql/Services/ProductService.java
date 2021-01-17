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
        //System.out.println(productRepository.findAll().get(0).getProductId());
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findByName(String name) {
        return productRepository.findByName(name);
    }

    @Override
    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public boolean existsById(Long productId) {
        return productRepository.existsById(productId);
    }

    @Override
    public void deleteById(Long productId) {
        productRepository.deleteById(productId);
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

//    @Override
//    public List<Product> getAllProductsByCategoryId(Long id) {
//        return productRepository.getAllProductsByCategoryId(id);
//    }
}
