package com.example.accessingdatamysql.modelsTemp;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "purchase")
public class Purchase {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "paymentMethod")
    private String paymentMethod;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "purchaseDetails")
    private String purchaseDetails;

    @Column(name = "totalPrice")
    private Double totalPrice;

    @Column(name = "address")
    private String address;

    @Column(name = "status_order", nullable = false)
    private OrderStatus statusOrder = OrderStatus.EMPTY_SHOPPING_CART;


    public Purchase() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getPurchaseDetails() {
        return purchaseDetails;
    }

    public void setPurchaseDetails(String purchaseDetails) {
        this.purchaseDetails = purchaseDetails;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public OrderStatus getStatusOrder() {
        return statusOrder;
    }

    public void setStatusOrder(OrderStatus statusOrder) {
        this.statusOrder = statusOrder;
    }

    @Override
    public String toString() {
        return "Purchase{" +
                "id=" + id +
                ", paymentMethod='" + paymentMethod + '\'' +
                '}';
    }
}
