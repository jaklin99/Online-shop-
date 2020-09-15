package sem3.service.repository;

import sem3.service.model.Product;
import sem3.service.model.User;

import java.util.ArrayList;
import java.util.List;

public class Database {
    private final List<User> users = new ArrayList<>();
    private final List<Product> products = new ArrayList<>();

    public  Database(){
        users.add(new User(1, "Joe Smith"));
        users.add(new User(2, "Ann Johnsson"));
        users.add(new User(3, "Ann Johnsson"));
        users.add(new User(4, "Miranda Winslet"));

        products.add(new Product(1,"iPhone",999));
        products.add(new Product(1,"Samsung",799));
    }

    public List<User> getUsers() {
        return users;
    }

    public User getUser(int nr) {
        for (User user : users) {
            if (user.getUserNumber() == nr)
                return user;
        }
        return null;
    }
    public List<Product> getProducts() {
        return products;
    }

    public Product getProduct(int nr) {
        for (Product product : products) {
            if (product.getProductNumber() == nr)
                return product;
        }
        return null;
    }

}
