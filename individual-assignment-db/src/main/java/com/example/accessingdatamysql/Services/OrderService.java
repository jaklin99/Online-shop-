package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.OrderRepository;
import com.example.accessingdatamysql.modelsTemp.Order;
import com.example.accessingdatamysql.modelsTemp.OrderStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService implements IOrderService{
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public List<Order> findAllByStatus(OrderStatus status) {
        return orderRepository.findAllByStatusOrder(status);
    }

    @Override
    public Optional<Order> findByOrderNr(String orderNr) {
        return orderRepository.findByOrderNr(orderNr);
    }

    @Override
    public Optional<Order> findById(Long id) {
        return orderRepository.findById(id);
    }

    @Override
    public boolean existsByOrderNr(String name) {
        return false;
    }

    @Override
    public void deleteByOrderNr(String orderNr) {
        orderRepository.deleteByName(orderNr);
    }

    @Override
    public void deleteAll() {
        orderRepository.deleteAll();
    }

    @Override
    public Order save(Order order) {
        return orderRepository.save(order);
    }
}
