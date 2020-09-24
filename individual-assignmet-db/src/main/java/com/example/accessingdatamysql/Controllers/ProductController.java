package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.ProductRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Post;
import com.example.accessingdatamysql.modelsTemp.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/product")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @PostMapping(path = "/add")
    public @ResponseBody Product addNewProduct(@RequestBody Product product) {
        productRepository.save(product);
        return product;
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PutMapping("/{id}/update")
    public Product updateProduct(@PathVariable long productId, @RequestBody Product productRequest) {
        return productRepository.findById(productId).map(product -> {
            product.setName(productRequest.getProductName());
            product.setPrice(productRequest.getPrice());
            // post.setContent(postRequest.getContent());
            return productRepository.save(product);
        }).orElseThrow(() -> new ResourceNotFoundException("ProductId " + productId + " not found"));
    }
    @DeleteMapping("/{id}/delete")
    public void deleteUser(@PathVariable("id") long id) throws Exception {
        productRepository.deleteById(id);
    }
}
