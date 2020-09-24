package com.example.accessingdatamysql.modelsTemp;

import javax.persistence.*;

@Entity (name = "PRODUCT")
public class Product {
    @Id
    @Column(name = "PRODUCT_ID", nullable = false)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long productId;
    @Column(length = 20)
    private String name;
    @Column(length = 6)
    private double price;

    public long getProductNumber() {
        return productId;
    }

    public void setProductNumber(long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


    @Override
    public String toString() {
        return "Product{" +
                "productNumber=" + productId +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
