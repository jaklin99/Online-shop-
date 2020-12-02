package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.CategoryRepository;
import com.example.accessingdatamysql.Repository.UserRepository;
import com.example.accessingdatamysql.modelsTemp.Category;
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
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class CategoryControllerTest {
    @Autowired
    private CategoryController categoryController;

    @MockBean
    private CategoryRepository categoryRepository;

    List<Category> sampleCategories;
    @BeforeEach
    void setUp() {
        sampleCategories = Arrays.asList(
                new Category().setCategoryId(0).setName("Balls"),
                new Category().setCategoryId(1).setName("Rackets")
        );
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getAllCategoriesWhenThereAreNone() {
            List<Category> actual = categoryController.getAllCategories();
            assertEquals(new ArrayList<Category>(), actual);
    }
    @Test
    void getAllCategoriesWhenThereAreSome() {
        Mockito.when(categoryRepository.findAll()).thenReturn(sampleCategories);
        List<Category> actual = categoryController.getAllCategories();
        assertEquals(sampleCategories, actual);
    }

//    @Test
//    void addNewCategory() {
//        Category sampleC = sampleCategories.get(0);
//
//        Mockito.when(categoryRepository.save(sampleC)).thenReturn(sampleC);
//
//        ResponseEntity<Category> response = categoryController.addNewCategory(sampleC);
//
//        assertEquals(sampleC, response.getBody());
//        assertEquals(HttpStatus.CREATED, response.getStatusCode());
//
//        Mockito.verify(categoryRepository).save(sampleC);
//    }

    @Test
    void updateCategory() {
    }

    @Test
    void deleteCategory() {
        Category sampleC = sampleCategories.get(0);
        Mockito.when(categoryRepository.findById(sampleC.getCategoryId())).thenReturn(Optional.empty()); //expect a fetch, return a "fetched" person;

        categoryRepository.delete(sampleC);

        Mockito.verify(categoryRepository).delete(sampleC);
    }
}