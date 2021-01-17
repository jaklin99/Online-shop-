//package com.example.accessingdatamysql.Services;
//
//import com.example.accessingdatamysql.Repository.ProductRepository;
//import com.example.accessingdatamysql.modelsTemp.Product;
//import com.example.accessingdatamysql.modelsTemp.User;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.security.core.parameters.P;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.BDDMockito.given;
//import static org.mockito.Mockito.when;
//
//
//@ExtendWith(MockitoExtension.class)
//class ProductServiceTest {
//
//    @Mock
//    ProductRepository productRepository;
//    @InjectMocks
//    ProductService productService;
//
//    @BeforeEach
//    void setUp() {
//    }
//
//    @AfterEach
//    void tearDown() {
//    }
//
//    @Test
//    void findAll() {
//        List<Product> productsCreate=new ArrayList<>();
//        when(productRepository.findAll()).thenReturn(productsCreate);
//        List<Product> created = productService.findAll();
//        assertThat(productsCreate).isSameAs(created);
//    }
//
//    @Test
//    void findByName() {
//        final String name= "racquet";
//        final  Product product =new Product();
//        given(productRepository.findByName(name)).willReturn(Optional.of(product));
//        final Optional<Product> expected = productService.findByName(name);
//        assertThat(expected).isNotNull();
//    }
//
//    @Test
//    void findById() {
//        final Long id= 1L;
//        final  Product product =new Product();
//        given(productRepository.findById(id)).willReturn(Optional.of(product));
//        final Optional<Product> expected = productService.findById(id);
//        assertThat(expected).isNotNull();
//    }
//
//    @Test
//    void existsByName() {
//    }
//
//    @Test
//    void deleteByName() {
//    }
//
//    @Test
//    void deleteAll() {
//    }
//
//    @Test
//    void save() {
//        Product productCreate=new Product();
//        productCreate.setProductName("dfgyui");
//        when(productRepository.save(any(Product.class))).thenReturn(new Product());
//        Product created = productService.save(productCreate);
//        assertThat(created.getProductName()).isSameAs(productCreate.getProductName());
//    }
//}