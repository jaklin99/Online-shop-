package com.example.accessingdatamysql.modelsTemp;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "Orders", //
        uniqueConstraints = { @UniqueConstraint(columnNames = "order_nr") })
public class Order implements Serializable {

    @Id
    @Column(name = "order_id", length = 50)
    private Long id;

    @Column(name = "order_date", nullable = false)
    private LocalDateTime orderDate = LocalDateTime.now();

    @Column(name = "delivered_date", nullable = false)
    private LocalDateTime deliverredDate = LocalDateTime.now();

    @Column(name = "status_order", nullable = false)
    private OrderStatus statusOrder = OrderStatus.EMPTY_SHOPPING_CART;

    @Column(name = "order_nr", nullable = false)
    private String orderNr;

    @Column(name = "total_price", nullable = false)
    private double totalPrice;

    private String deliverryAddress;
    private String paymentMethod;


 @ManyToOne(optional = false, targetEntity = User.class)
 @JoinColumn(name = "user_id", referencedColumnName = "id")
 private User user;

    @OneToMany(mappedBy = "order")
    private List<OrderDetails> orderDetails;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public LocalDateTime getDeliverredDate() {
        return deliverredDate;
    }

    public void setDeliverredDate(LocalDateTime deliverredDate) {
        this.deliverredDate = deliverredDate;
    }

    public OrderStatus getStatusOrder() {
        return statusOrder;
    }

    public void setStatusOrder(OrderStatus statusOrder) {
        this.statusOrder = statusOrder;
    }

    public String getOrderNr() {
        return orderNr;
    }

    public void setOrderNum(String orderNr) {
        this.orderNr = orderNr;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getDeliverryAddress() {
        return deliverryAddress;
    }

    public void setDeliverryAddress(String deliverryAddress) {
        this.deliverryAddress = deliverryAddress;
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

    public List<OrderDetails> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetails> orderDetails) {
        this.orderDetails = orderDetails;
    }
}