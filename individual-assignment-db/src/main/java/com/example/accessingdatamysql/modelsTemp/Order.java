//package com.example.accessingdatamysql.modelsTemp;
//
//import javax.persistence.*;
//import java.time.LocalDateTime;
//
//@Entity(name = "ORDERS")
//public class Order {
//    @Id
//    @Column(name = "order_id", nullable = false)
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private long orderId;
//    @Column(name = "order_date", nullable = false)
//    private LocalDateTime orderDate;
//
//    @Column(name = "order_date", nullable = false)
//    private int orderNum;
//
//    @Column(name = "amount", nullable = false)
//    private double amount;
//
//    @Column(name = "customer_name", length = 255, nullable = false)
//    private String customerName;
//
//    @Column(name = "customer_email", length = 128, nullable = false)
//    private String customerEmail;
//
//    @ManyToOne(optional = false, targetEntity = Product.class)
//    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
//    private Product product;
//
//    @ManyToOne(optional = false, targetEntity = User.class)
//    @JoinColumn(name = "id", referencedColumnName = "id")
//    private User user;
//
//    public long getOrderId() {
//        return orderId;
//    }
//
//    public void setOrderId(long orderId) {
//        this.orderId = orderId;
//    }
//
//    public LocalDateTime getOrderDate() {
//        return orderDate;
//    }
//
//    public void setOrderDate(LocalDateTime orderDate) {
//        this.orderDate = orderDate;
//    }
//
//    public int getOrderNum() {
//        return orderNum;
//    }
//
//    public void setOrderNum(int orderNum) {
//        this.orderNum = orderNum;
//    }
//
//    public double getAmount() {
//        return amount;
//    }
//
//    public void setAmount(double amount) {
//        this.amount = amount;
//    }
//
//    public String getCustomerName() {
//        return customerName;
//    }
//
//    public void setCustomerName(String customerName) {
//        this.customerName = customerName;
//    }
//
//    public String getCustomerEmail() {
//        return customerEmail;
//    }
//
//    public void setCustomerEmail(String customerEmail) {
//        this.customerEmail = customerEmail;
//    }
//
//    public Product getProduct() {
//        return product;
//    }
//
//    public void setProduct(Product product) {
//        this.product = product;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//}
