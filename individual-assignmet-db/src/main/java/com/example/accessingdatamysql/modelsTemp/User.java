package com.example.accessingdatamysql.modelsTemp;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity(name = "USER")
public class User {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long userId;
    @Column(nullable = false, length = 20)
    private String name;
    @Column(nullable = false,length = 20)
    private String email;

    @OneToMany(mappedBy = "user")
    private List<Purchase> purchase;

    @OneToMany(mappedBy = "user")
    private List<Comment> comment;

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