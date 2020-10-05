package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.CategoryRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Category;
import com.example.accessingdatamysql.modelsTemp.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/category")
@CrossOrigin(origins = "http://localhost:3000")

public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Category> addNewCategory(@RequestBody Category category) {
        categoryRepository.save(category);
        return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Category> updateCategory(@PathVariable long categoryId, @RequestBody Category updatedCategory) {
        if (categoryRepository.existsById(categoryId)){
            categoryRepository.findById(categoryId).map(c -> {
                c.setName(c.getName());
                categoryRepository.save(c);
                return updatedCategory;
            });
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Category> deleteCategory(@PathVariable long id){
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
