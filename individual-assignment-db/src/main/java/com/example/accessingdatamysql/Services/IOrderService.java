package com.example.accessingdatamysql.Services;


import com.example.accessingdatamysql.modelsTemp.Order;
import com.example.accessingdatamysql.modelsTemp.OrderStatus;

import java.util.List;
import java.util.Optional;

public interface IOrderService {
    List<Order> findAll();
    List<Order> findAllByStatus(OrderStatus status);
    Optional<Order> findByOrderNr(String orderNr);
    Optional<Order> findById(Long id);
    boolean existsByOrderNr(String orderNr);
    void deleteByOrderNr(String orderNr);
    void deleteAll();
    Order save(Order order);
}
