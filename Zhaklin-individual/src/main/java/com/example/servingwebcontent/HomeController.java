package com.example.servingwebcontent;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @RequestMapping("/")
    public String index() {
        return "<h1>Welcome to the tennis club!</h1>";
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
    @PostMapping("/product/{id}")
    public ResponseEntity createProduct(@RequestBody Product newProduct) {
        if (db.addProduct(newProduct))
            return new ResponseEntity<Product>(newProduct, HttpStatus.CREATED);
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @DeleteMapping("/products/{id}")
    public void deleteUser(@PathVariable("id") int id) throws Exception {
        db.deleteProductById(id);
    }
}

