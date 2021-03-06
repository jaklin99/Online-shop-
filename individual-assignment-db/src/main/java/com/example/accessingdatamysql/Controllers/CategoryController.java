package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.CategoryRepository;
import com.example.accessingdatamysql.modelsTemp.Category;
import com.example.accessingdatamysql.modelsTemp.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path = "/category")
@CrossOrigin(origins = "http://localhost:3000")
//@PreAuthorize("hasRole('ADMIN')")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;
//    @Autowired
//    private CategoryService categoryService;

    @GetMapping(path = "/all")
    public @ResponseBody
    List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long id) {
        Optional<Category> categoryInfo = categoryRepository.findById(id);
        return categoryInfo.map(c -> new ResponseEntity<>(c, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<Category> addNewCategory(@RequestBody Category category) {
        categoryRepository.save(category);
        return new ResponseEntity<Category>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category updatedCategory) {
    Optional<Category> categoryInfo = categoryRepository.findById(id);
    if (categoryInfo.isPresent()) {
        Category category = categoryInfo.get();
        category.setName(updatedCategory.getName());
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.NO_CONTENT);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Category> deleteCategory(@PathVariable Long id){
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<User> deleteAllUsers() {
        categoryRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
