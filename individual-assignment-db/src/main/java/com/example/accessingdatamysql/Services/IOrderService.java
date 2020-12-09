package com.example.accessingdatamysql.Services;


import com.example.accessingdatamysql.modelsTemp.Order;
import com.example.accessingdatamysql.modelsTemp.OrderStatus;

import java.util.List;
import java.util.Optional;

public interface IOrderService {
    List<Order> findAll();
    Order getUserShoppingCart(Long id);
    List<Order> findAllByStatus(OrderStatus status);
    Optional<Order> findById(Long id);
    boolean existsByOrderNr(String orderNr);
    boolean existsById(Long id);
    void deleteById(Long id);
    void deleteAll();
    Order save(Order order);
}
