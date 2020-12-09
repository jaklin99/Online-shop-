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
    public Order getUserShoppingCart(Long id) {
        return orderRepository.findOrderByUser_Id(id);
    }

    @Override
    public List<Order> findAllByStatus(OrderStatus status) {
        return orderRepository.findAllByStatusOrder(status);
    }

    @Override
    public Optional<Order> findById(Long id) {
        return orderRepository.findById(id);
    }

    @Override
    public boolean existsByOrderNr(String orderNr) {
        return false;
    }

    @Override
    public boolean existsById(Long id) {
        return orderRepository.existsById(id);
    }

    @Override
    public void deleteById(Long id) {
        orderRepository.deleteById(id);
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
