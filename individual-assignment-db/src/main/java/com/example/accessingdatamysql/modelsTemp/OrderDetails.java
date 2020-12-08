package com.example.accessingdatamysql.modelsTemp;

import org.aspectj.weaver.ast.Or;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Order_Details")
public class OrderDetails implements Serializable {

    @Id
    @Column(name = "ID", length = 50, nullable = false)
    private Long id;

    @Column(nullable = false, precision = 2)
    private double amount;

    @Column(nullable = false, precision = 2)
    private double price;

    @Column(nullable = false)
    private int quantity;

    @ManyToOne(optional = false,targetEntity = Order.class)
    @JoinColumn(name = "order_id", referencedColumnName ="order_id")
    private Order order;

    @ManyToOne(optional = false,targetEntity = Product.class)
    @JoinColumn(name = "product_id", referencedColumnName ="PRODUCT_ID")
    private Product product;

    private String buyerId;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getBuyerEmail() {
        return buyerId;
    }

    public void setBuyerId(String buyerId) {
        this.buyerId = buyerId;
    }
}
