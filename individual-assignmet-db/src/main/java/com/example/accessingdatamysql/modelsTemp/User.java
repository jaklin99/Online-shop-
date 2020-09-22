package com.example.accessingdatamysql.modelsTemp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int userId;

    private String name;

    private String email;
    public int getUserNumber() {
        return userId;
    }

    public void setUserNumber(int userNumber) {
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