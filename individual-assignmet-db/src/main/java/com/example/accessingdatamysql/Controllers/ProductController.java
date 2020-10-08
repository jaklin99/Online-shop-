package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.ProductRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Post;
import com.example.accessingdatamysql.modelsTemp.Product;
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
@RequestMapping(path = "/product")
@CrossOrigin(origins = "http://localhost:3000")

public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Product> addNewProduct(@RequestBody Product product) {
        productRepository.save(product);
        return new ResponseEntity<Product>(HttpStatus.CREATED);
    }


    @PutMapping("/{id}/update")
    public ResponseEntity<Product> updateProduct(@PathVariable long productId, @RequestBody Product updatedProduct) {
        if (productRepository.existsById(productId)){
            productRepository.findById(productId).map(p -> {
                p.setProductName(p.getProductName());
                p.setPrice(p.getPrice());
                productRepository.save(p);
                return updatedProduct;
            });
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Product> deleteProduct(@PathVariable long id){
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
