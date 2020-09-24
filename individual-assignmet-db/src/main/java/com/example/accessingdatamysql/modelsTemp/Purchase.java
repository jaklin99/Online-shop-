package com.example.accessingdatamysql.modelsTemp;
import javax.persistence.*;
import java.util.*;

@Entity(name="purchase")
public class Purchase {
    @Id
    @Column(name = "PURCHASE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long purchaseId;

    @OneToOne(targetEntity = User.class) //vruzvane s klasa
    @JoinColumn(name = "buyer_id", referencedColumnName = "USER_ID") //foreign key + teibula ot klasa
    private long buyerId;
}

