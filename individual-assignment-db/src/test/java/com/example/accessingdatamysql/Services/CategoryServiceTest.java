package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Controllers.CategoryController;
import com.example.accessingdatamysql.Repository.CategoryRepository;
import com.example.accessingdatamysql.modelsTemp.Category;
import com.example.accessingdatamysql.modelsTemp.Purchase;
import com.example.accessingdatamysql.modelsTemp.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CategoryServiceTest {
//
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
        List<Category> categoriesCreate=new ArrayList<>();
        when(categoryRepository.findAll()).thenReturn(categoriesCreate);
        List<Category> created = categoryService.findAll();
        assertThat(categoriesCreate).isSameAs(created);
    }

    @Test
    void findByName() {
    }

    @Test
    void findById() {
        final Long id= 1L;
        final Category category =new Category();
        given(categoryRepository.findById(id)).willReturn(Optional.of(category));
        final Optional<Category> expected = categoryService.findById(id);
        assertThat(expected).isNotNull();
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

//    @Test
//    void save() {
//        Category cCreate=new Category();
//        cCreate.setCategoryId(1);
//        when(categoryRepository.save(any(Category.class))).thenReturn(new Category());
//        Category created = categoryService.save(cCreate);
//        assertThat(created.getCategoryId()).isSameAs(cCreate.getCategoryId());
//    }
}