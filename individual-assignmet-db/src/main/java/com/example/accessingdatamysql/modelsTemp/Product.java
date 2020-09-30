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

    @ManyToOne(optional = false, targetEntity = Category.class)
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    private Category category;

    @ManyToOne(optional = false, targetEntity = Purchase.class)
    @JoinColumn(name = "purchase_id", referencedColumnName = "purchase_id")
    private Purchase purchase;


    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }

    public String getProductName() {
        return name;
    }

    public void setProductName(String name) {
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
