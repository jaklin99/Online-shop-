package com.example.accessingdatamysql.modelsTemp;


import org.springframework.security.core.parameters.P;

import javax.persistence.*;

@Entity
@Table(name = "Order_Details")
public class OrderDetails  {

    @Id
    @Column(name = "ID", length = 50, nullable = false)
    private Long id;

    //@Column(nullable = false, precision = 2)
    //private double price;

    @Column(nullable = false)
    private int quantity;

    @ManyToOne(optional = false,targetEntity = Order.class)
    @JoinColumn(name = "order_id", referencedColumnName ="order_id")
    private Order order;

    @OneToOne(optional = false,targetEntity = Product.class)
    @JoinColumn(name = "product_name", referencedColumnName ="NAME")
    private Product product;

    private Long buyerId;
    private double amount;
    private String paymentMethod;
    public double getTotalPrice(){
   return this.quantity*this.product.getPrice();
 }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(Long buyerId) {
        this.buyerId = buyerId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
//
//    public double getPrice() {
//        return price;
//    }
//
//    public void setPrice(double price) {
//        this.price = price;
//    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

}
