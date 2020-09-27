package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.CategoryRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/category")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    Category addNewCategory(@RequestBody Category category) {
        categoryRepository.save(category);
        return category;
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @PutMapping("/{id}/update")
    public Category updateCategory(@PathVariable long categoryId, @RequestBody Category categoryRequest) {
        return categoryRepository.findById(categoryId).map(c -> {
            c.setName(categoryRequest.getName());
            return categoryRepository.save(c);
        }).orElseThrow(() -> new ResourceNotFoundException("CategoryId " + categoryId + " not found"));
    }

    @DeleteMapping("/{id}/delete")
    public void deleteCategory(@PathVariable("id") long id) throws Exception {
        categoryRepository.deleteById(id);
    }
}
