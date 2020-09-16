package service.model;

public class User {

    public int userNumber;
    private String name;


    public User(int userNumber, String name) {
        this.userNumber = userNumber;
        this.name = name;

    }

    public int getUserNumber() {
        return userNumber;
    }

    public void setUserNumber(int userNumber) {
        this.userNumber = userNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{" +
                "userNumber=" + userNumber +
                ", name='" + name + '\'' +
                '}';
    }
}
