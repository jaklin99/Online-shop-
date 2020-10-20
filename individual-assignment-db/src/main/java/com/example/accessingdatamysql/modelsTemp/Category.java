package com.example.accessingdatamysql.modelsTemp;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.List;

@Entity(name = "Category")
public class Category {
    @Id
    @Column(name = "category_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    private String name;

    @OneToMany(mappedBy = "category")
    private List<Product> products;

    public Category() {}

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
