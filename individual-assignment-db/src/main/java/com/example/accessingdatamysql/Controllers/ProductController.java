package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.ProductRepository;
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

import javax.transaction.Transactional;
import java.util.Optional;

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

    @GetMapping("/{productName}")
    public ResponseEntity<Product> getProductById(@PathVariable("productName") String name) {
        Optional<Product> productInfo = productRepository.findByName(name);
        return productInfo.map(product -> new ResponseEntity<>(product, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<Product> addNewProduct(@RequestBody Product product) {
        productRepository.save(product);
        return new ResponseEntity<Product>(HttpStatus.CREATED);
    }


//    @PutMapping("/{productId}/update")
//    public ResponseEntity<Product> updateProduct(@PathVariable long productId, @RequestBody Product updatedProduct) {
//        if (productRepository.existsById(productId)){
//            productRepository.findById(productId).map(p -> {
//                p.setProductName(p.getProductName());
//                p.setPrice(p.getPrice());
//                productRepository.save(p);
//                return updatedProduct;
//            });
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        else
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//	}
@PutMapping("/{productName}/update")
public ResponseEntity<Product> updateProduct(@PathVariable String productName, @RequestBody Product updatedProduct) {
    Optional<Product> productInfo = productRepository.findByName(productName);
    if (productInfo.isPresent()) {
        Product product = productInfo.get();
        product.setProductName(updatedProduct.getProductName());
        product.setPrice(updatedProduct.getPrice());
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.NO_CONTENT);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
    @Transactional
    @DeleteMapping("/{productName}/delete")
    public ResponseEntity<Product> deleteProduct(@PathVariable String productName){
        if (productRepository.existsByName(productName)) {
            productRepository.deleteByName(productName);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/deleteAll")
    public ResponseEntity<Product> deleteAllProducts() {
        productRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
