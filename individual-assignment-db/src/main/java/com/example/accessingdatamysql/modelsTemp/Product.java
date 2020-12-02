package com.example.accessingdatamysql.modelsTemp;

import javax.persistence.*;

@Entity (name = "PRODUCT")
public class Product {
    @Id
    @Column(name = "PRODUCT_ID", nullable = false)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long productId;
    @Column(nullable = false, length = 40)
    private String name;
    @Column(nullable = false, precision = 2)
    private double price;
    @Column(nullable = false)
    @Lob
    private String image;


    @ManyToOne(optional = false, targetEntity = Category.class)
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    private Category category;

    public long getProductId() {
        return productId;
    }

    public Product setProductId(long productId) {
        this.productId = productId;
        return this;
    }

    public Category getCategory() {
        return category;
    }

    public Product setCategory(Category category) {
        this.category = category;
        return this;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getProductName() {
        return name;
    }

    public Product setProductName(String name) {
        this.name = name;
        return this;
    }

    public double getPrice() {
        return price;
    }

    public Product setPrice(double price) {
        this.price = price;
        return this;
    }

    public Product(){}

}
