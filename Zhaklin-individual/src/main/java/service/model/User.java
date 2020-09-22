package service.model;

public class User {
   private int userId;
    private String name;
    private String email;

    public User(int userNumber, String name) {
        this.userId = userNumber;
        this.name = name;
    }

    public User() {

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
