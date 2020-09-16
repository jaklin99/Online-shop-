package service.repository;

import service.model.Product;
import service.model.User;

import java.util.ArrayList;
import java.util.List;

public class Database {
    private final List<User> users = new ArrayList<>();
    private final List<Product> products = new ArrayList<>();

    public  Database(){
        users.add(new User(1, "John Snaw"));
        users.add(new User(2, "Mark Rocket"));
        users.add(new User(3, "Matt Dow"));
        users.add(new User(4, "Jane Snaw"));
        users.add(new User(5, "Marry Rocket"));
        users.add(new User(6, "Marian Dow"));

        products.add(new Product(1, "T-Shiirt", 30.00));
        products.add(new Product(2, "Tennis racket", 110));
        products.add(new Product(3, "Man's shoes", 89.99));
    }

    public User addUser(User newUser) throws Exception {
     if (this.getUserById(newUser.getUserNumber())!=null){
         throw new Exception("ALready a user with such Id.");
     }else{
         this.users.add(newUser);
     }
     return null;
    }
    public User deleteUserById(int id) throws Exception {
        for (User user : users) {
        if (this.getUserById(user.getUserNumber())!=null){
            if (user.getUserNumber()==id);
        }else{
            throw new Exception("No user with such Id.");
        }
        return null;
    }
        return null;
    }
    public List<User> getUsers() {
        return users;
    }

    public User getUserById(int id) {
        for (User user : users) {
            if (user.getUserNumber() == id)
                return user;
        }
        return null;
    }

    public List<Product> getProducts() {
        return products;
    }

    public Product getProductById(int nr) {
        for (Product product : products) {
            if (product.getProductNumber() == nr)
                return product;
        }
        return null;
    }

}
