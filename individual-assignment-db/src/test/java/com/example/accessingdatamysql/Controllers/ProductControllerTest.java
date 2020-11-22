package com.example.accessingdatamysql.Controllers;
import com.example.accessingdatamysql.Repository.ProductRepository;
import com.example.accessingdatamysql.modelsTemp.Category;
import com.example.accessingdatamysql.modelsTemp.Product;
import com.example.accessingdatamysql.modelsTemp.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
class ProductControllerTest {
    @Autowired
    private ProductController productController;

    @MockBean
    private ProductRepository productRepository;

    List<Product> sampleProducts;
    List<Category> categories;

    @BeforeEach
    void setUp() {
        sampleProducts = Arrays.asList(
                new Product().setProductName("the most bluish balls ").setPrice(100).setCategory(new Category()),
                new Product().setProductName("the hardest racket ").setPrice(1000).setCategory(new Category())
                );
    }

    @AfterEach
    void tearDown() {
    }
    @Test
    void getAllProductsWhenThereAreNone() {
        List<Product> actual = productController.getAllProducts();
        assertEquals(new ArrayList<Product>(), actual);
    }

    @Test
    void getAllProductsWhenThereAreSome() {
        Mockito.when(productRepository.findAll()).thenReturn(sampleProducts);
        List<Product> actual = productController.getAllProducts();
        assertEquals(sampleProducts, actual);
    }
//    @Test
//    void AddNewValidProduct(){
//        //when sb calls this user, it returns the same user - this is because of the mock repository
//        Product sampleProduct = sampleProducts.get(0);
//
//        Mockito.when(productRepository.save(sampleProduct)).thenReturn(sampleProduct);
//
//        ResponseEntity<Product> response = productController.addNewProduct(sampleProduct);
//
//        assertEquals(sampleProduct, response.getBody());
//        assertEquals(HttpStatus.CREATED, response.getStatusCode());
//
//        Mockito.verify(productRepository).save(sampleProduct);
//    }
//    @Test
//    void findProductByName(){
//        Product product = sampleProducts.get(0).setProductName("bamBam");
//        Mockito.when(productRepository.findByName("bamBam")).thenReturn(Optional.of(product));
//        ResponseEntity<Product> actualProduct=productController.getProductByName("bamBam");
//        assertEquals(product,actualProduct.getBody());
//        assertEquals(HttpStatus.OK, actualProduct.getStatusCode());
//        Mockito.verify(productRepository).findByName(product.getProductName());
//    }
//    @Test
//    void productNotFound(){
//
//        Mockito.when(productRepository.findByName(Mockito.anyString())).thenReturn(Optional.empty());
//
//        ResponseEntity<Product> response = productController.getProductByName("racket");
//
//        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
//    }
    @Test
    void updateExistingProduct(){
        Product sampleProduct = sampleProducts.get(0);
        Mockito.when(productRepository.save(sampleProduct)).thenReturn(sampleProduct); //expect a fetch, return a "fetched" person;
        //User expectedUser=userController.updateUser(sampleUser.getEmail());
        //assertNotNull(expectedUser);
        //Mockito.verify(userRepository).save(any(sampleUser);
    }
    @Test void deleteActualProduct(){
        Product sampleProduct = sampleProducts.get(0);
        Mockito.when(productRepository.findByName(sampleProduct.getProductName())).thenReturn(Optional.empty()); //expect a fetch, return a "fetched" person;

        productRepository.delete(sampleProduct);

        Mockito.verify(productRepository).delete(sampleProduct);
    }
}