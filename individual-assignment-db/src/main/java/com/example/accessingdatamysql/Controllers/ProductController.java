package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.ProductRepository;
import com.example.accessingdatamysql.Services.ProductService;
import com.example.accessingdatamysql.modelsTemp.Product;
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

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path = "/product")
@CrossOrigin(origins = "http://localhost:3000")
//@PreAuthorize("hasRole('ADMIN')")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping(path = "/all")
    public @ResponseBody
    List<Product> getAllProducts() {
        return productService.findAll();
    }

    @GetMapping("/{productName}")
    public ResponseEntity<Product[]> getProductByName(@PathVariable("productName") String name) {
        Optional<Product> productInfo = productService.findByName(name);
        if (productInfo.toString().toLowerCase().length()!=0){
        return productInfo.map(product -> new ResponseEntity<>(new Product[]{product}, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }else {
          return null;
        }
    }
//    @GetMapping("/{name}")
//    public ResponseEntity<Product> findByName(@PathVariable("name") String name) {
//        Optional<Product> productInfo = productService.findByName(name);
//        return productInfo.map(product -> new ResponseEntity<>(product, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }

//    @GetMapping("/category/{id}")
//    public @ResponseBody
//    List<Product> getAllProductsBy_CategoryId(@PathVariable long id) {
//        return productService.getAllProductsByCategoryId(id);
//    }
    @PostMapping("/add")
    public ResponseEntity<Product> addNewProduct(@RequestBody Product product) {
        productService.save(product);
        return new ResponseEntity<Product>(HttpStatus.CREATED);
    }


@PutMapping("/{productName}/update")
public ResponseEntity<Product> updateProduct(@PathVariable String productName, @RequestBody Product updatedProduct) {
    Optional<Product> productInfo = productService.findByName(productName);
    if (productInfo.isPresent()) {
        Product product = productInfo.get();
        product.setProductName(updatedProduct.getProductName());
        product.setPrice(updatedProduct.getPrice());
        productService.save(product);
        return new ResponseEntity<>(product, HttpStatus.NO_CONTENT);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
    @Transactional
    @DeleteMapping("/{productName}/delete")
    public ResponseEntity<Product> deleteProduct(@PathVariable String productName){
        if (productService.existsByName(productName)) {
            productService.deleteByName(productName);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/deleteAll")
    public ResponseEntity<Product> deleteAllProducts() {
        productService.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
