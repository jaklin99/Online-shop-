package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Controllers.CategoryController;
import com.example.accessingdatamysql.Repository.CategoryRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class CategoryServiceTest {

    @Mock
    CategoryRepository categoryRepository;
    @InjectMocks
    CategoryService categoryService;

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