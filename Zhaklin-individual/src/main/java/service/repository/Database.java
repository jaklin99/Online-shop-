package service.repository;

import service.model.Product;
import service.model.User;

import java.util.ArrayList;
import java.util.List;

public class Database {
    private final List<User> users = new ArrayList<>();
    private final List<Product> products = new ArrayList<>();

    public Database() {
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
//user methods
    public boolean addUser(User newUser){
        if (this.getUserById(newUser.getUserNumber()) == null) {
            this.users.add(newUser);
            return true;
        } else {
           return false;
        }
    }

    public boolean deleteUserById(int id) throws Exception {
        for (User user : users) {
            if (this.getUserById(user.getUserNumber()) != null) {
                // if (user.getUserNumber()==id){
                return users.remove(user);
            } else {
                throw new Exception("No user with such Id.");
            }
        }
        return false;
    }
    public boolean updateUser(User user){
        User old=this.getUserById(user.getUserNumber());
        if (old==null){
            return false;
        }old.setUserName(user.getUserName());
        old.setUserNumber(user.getUserNumber());
        return true;
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

//product methods
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
    public boolean addProduct(Product newProduct){
        if (this.getProductById(newProduct.getProductNumber()) == null) {
            this.products.add(newProduct);
            return true;
        } else {
            return false;
        }
    }
    public boolean updateProduct(Product product){
        Product old=this.getProductById(product.getProductNumber());
        if (old==null){
            return false;
        }old.setProductNumber(product.getProductNumber());
        old.setName(product.getProductName());
        old.setPrice(product.getPrice());
        return true;
    }
    public boolean deleteProductById(int id) throws Exception {
        for (Product product : products) {
            if (this.getProductById(product.getProductNumber()) != null) {
                // if (user.getUserNumber()==id){
                return products.remove(product);
            } else {
                throw new Exception("No product with such Id.");
            }
        }
        return false;
    }
}
