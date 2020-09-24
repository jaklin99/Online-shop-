package com.example.accessingdatamysql.modelsTemp;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "USER")
public class User {
    @Id
    @Column(name = "USER_ID", nullable = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long userId;
    @Column(name = "USER_NAME", length = 20)
    private String name;
    @Column(name = "USER_EMAIL",length = 20)
    private String email;

    @OneToOne(targetEntity = Purchase.class) //vruzvane s klasa
    @JoinColumn(name = "order_id", referencedColumnName = "PURCHASE_ID") //foreign key + teibula ot klasa
    private long orderId;

    public long getUserNumber() {
        return userId;
    }

    public void setUserNumber(long userNumber) {
        this.userId = userNumber;
    }

    public String getUserName() {
        return name;
    }

    public void setUserName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "userNumber=" + userId +
                ", name='" + name + '\'' +
                '}';
    }
}