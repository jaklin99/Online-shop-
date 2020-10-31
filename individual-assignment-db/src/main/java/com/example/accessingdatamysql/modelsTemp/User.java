package com.example.accessingdatamysql.modelsTemp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity(name = "USER")
public class User {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long userId;
    @Column(nullable = false, length = 30)
    private String name;
    @Column(unique = true,nullable = false,length = 30)
    @Email
    private String email;
    @Column(nullable = false, length = 20)
    private String password;

//    @Enumerated(EnumType.STRING)
//    private UserType userType;

    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    @OneToMany(mappedBy = "user")
    private List<Comment> comment;

    public String getName() {
        return name;
    }

    public User setName(String name) {

        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public User setEmail(String email) {

        this.email = email;
        return this;
    }


    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", name='" + name + '\'' +
                '}';
    }
    public User(){}
}