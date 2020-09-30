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
    @JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID") //foreign key + teibula ot klasa
    private User user;
}

