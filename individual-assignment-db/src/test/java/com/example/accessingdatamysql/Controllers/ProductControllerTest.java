package com.example.accessingdatamysql.Controllers;
import com.example.accessingdatamysql.Repository.ProductRepository;
import com.example.accessingdatamysql.modelsTemp.Product;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
class ProductControllerTest {
    @Autowired
    private PostController postController;

    @MockBean
    private ProductRepository productRepository;

    List<Product> sampleProducts;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }
}