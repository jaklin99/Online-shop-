//package com.example.accessingdatamysql.modelsTemp;
//
//import javax.persistence.*;
//
//@Entity(name = "ORDER_DETAILS")
//public class OrderDetails {
//    @Id
//    @Column(name = "id", length = 50, nullable = false)
//    private String id;
//
//    @ManyToOne(optional = false, targetEntity = Order.class)
//    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
//    private Order order;
//
//    @ManyToOne(optional = false, targetEntity = Product.class)
//    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
//    private Product product;
//
//    @Column(name = "quantity", nullable = false)
//    private int quanity;
//
//    //single price of a product
//    @Column(name = "price", nullable = false)
//    private double price;
//
//    //the amount of money of the whole order
//    @Column(name = "amount", nullable = false)
//    private double amount;
//
//}
