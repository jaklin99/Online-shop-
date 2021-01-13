package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.ProductRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    ProductRepository productRepository;
    @InjectMocks
    ProductService productService;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void findAll() {
    }

    @Test
    void findByName() {
    }

    @Test
    void findById() {
    }

    @Test
    void existsByName() {
    }

    @Test
    void deleteByName() {
    }

    @Test
    void deleteAll() {
    }

    @Test
    void save() {
    }
}