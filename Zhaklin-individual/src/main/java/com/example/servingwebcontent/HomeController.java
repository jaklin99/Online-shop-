package com.example.servingwebcontent;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import service.model.Product;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeController {
    @GetMapping("/greeting")
    public String greeting(@RequestParam(name = "name", required = false, defaultValue = "There") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @RequestMapping("/")
    public String index() {
        return "Welcome to the tennis club!";
    }

    @GetMapping("products")
    public List<Product> getAllProducts() {
        List<Product> products = new ArrayList<>();
        products.add(new Product(1, "T-Shiirt", 30.00));
        products.add(new Product(2, "Tennis racket", 110));
        products.add(new Product(3, "Man's shoes", 89.99));
        return products;
    }

    @GetMapping("shoes")
    public List<Product> getShoes() {
        List<Product> shoes = new ArrayList<>();
        shoes.add(new Product(1, "Pink teen tennis shoes", 65.60));
        shoes.add(new Product(2, "White unisex shoes", 110));
        shoes.add(new Product(3, "Man's shoes", 89.99));
        return shoes;
    }
}

