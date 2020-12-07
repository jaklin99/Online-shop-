//package com.example.accessingdatamysql.Services;
//
//import com.example.accessingdatamysql.Repository.OrderRepository;
//import com.example.accessingdatamysql.modelsTemp.Order;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import javax.transaction.Transactional;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//@Transactional
//public class OrderService implements  IOrderService {
//    @Autowired
//    private OrderRepository orderRepository;
//    @Override
//    public Order getUserShoppingCart(Long id) {
//        return orderRepository.getUserShoppingCart(id);
//    }
//    @Override
//    public List<Order> getAllSubmittedOrdersByUserId(Long id) {
//        return orderRepository.getAllSubmittedOrdersByUserId(id);
//    }
//    @Override
//    public List<Order> getAllPendingOrders() {
//        return orderRepository.getAllPendingOrders();
//    }
//
//    @Override
//    public List<Order> getAllCollectedOrders() {
//        return orderRepository.getAllCollectedOrders();
//    }
//    @Override
//    public Boolean existsById(long id) {
//        return orderRepository.existsById(id);
//    }
//    @Override
//    public Optional<Order> findById(long id) {
//        return orderRepository.findById(id);
//    }
//    @Override
//    public Order save(Order order) {
//        return orderRepository.save(order);
//    }
//    @Override
//    public List<Order> findAll() {
//        return orderRepository.findAll();
//    }
//    @Override
//    public Order getOne(long id) {
//        return orderRepository.getOne(id);
//    }
//
//}
