package com.example.servingwebcontent;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import service.model.Product;
import service.model.User;
import service.repository.Database;
import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeController {
    private static Database db=new Database();
    @GetMapping("/greeting")
    public String greeting(@RequestParam(name = "name", required = false, defaultValue = "There") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @RequestMapping("/")
    public String index() {
        return "Welcome to the tennis club!";
    }

    @GetMapping("products/{id}")
    public Product getProductById(@PathVariable("id") int id){
        return db.getProductById(id);
    }
    @GetMapping("products")
    public List<Product> getAllProducts() {
        return db.getProducts();
    }
    @PutMapping("/products")
    public void updateUser(@PathVariable("product") Product product) {
        db.updateProduct(product);
    }

    @DeleteMapping("/products/{id}")
    public void deleteUser(@PathVariable("id") int id) throws Exception {
        db.deleteProductById(id);
    }
}

