package com.example.accessingdatamysql.modelsTemp;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class ProductTest {
    Product sampleProduct;
    @BeforeEach
    void setUp() {
        long id=0;
        sampleProduct = new Product().setProductId(id).setProductName("Racket").setPrice(20);
    }

    @AfterEach
    void tearDown() {}

    @Test
    void getProductId() {
        assertEquals(0, sampleProduct.getProductId());
    }

    @Test
    void setProductId() {
        sampleProduct.setProductId((long) 6);
        assertEquals(6, sampleProduct.getProductId());
    }

    @Test
    void getProductName() {
        assertEquals("Racket", sampleProduct.getProductName());
    }

    @Test
    void setProductName() {
        sampleProduct.setProductName("Tennis Racket");
        assertEquals("Tennis Racket", sampleProduct.getProductName());
    }

    @Test
    void getPrice() {
        assertEquals(20, sampleProduct.getPrice());
    }

    @Test
    void setPrice() {
        sampleProduct.setPrice(16);
        assertEquals(16, sampleProduct.getPrice());
    }
}