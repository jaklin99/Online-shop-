package com.example.accessingdatamysql.modelsTemp;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.*;

@Entity(name="PURCHASE")
public class Purchase {
    @Id
    @Column(name = "PURCHASE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long purchaseId;

    @Enumerated(EnumType.STRING)
    private PurchaseStatus purchaseStatus;

    @OneToMany(mappedBy = "purchase")
    private List<Product>products;

    @ManyToOne(optional = false, targetEntity = User.class) //vruzvane s klasa
    @JoinColumn(name = "user_id", referencedColumnName = "user_id") //foreign key + teibula ot klasa
    private User user;

    public long getPurchaseId() {
        return purchaseId;
    }

    public void setPurchaseId(long purchaseId) {
        this.purchaseId = purchaseId;
    }

    public PurchaseStatus getPurchaseStatus() {
        return purchaseStatus;
    }

    public void setPurchaseStatus(PurchaseStatus purchaseStatus) {
        this.purchaseStatus = purchaseStatus;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

