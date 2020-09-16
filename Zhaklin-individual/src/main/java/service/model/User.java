package service.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User {

    private int userId;
    private String name;


    public User(@JsonProperty("id") int userNumber, @JsonProperty("name") String name) {
        this.userId = userNumber;
        this.name = name;

    }

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

    @Override
    public String toString() {
        return "User{" +
                "userNumber=" + userId +
                ", name='" + name + '\'' +
                '}';
    }
}
