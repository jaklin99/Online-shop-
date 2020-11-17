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
//
//    @Override
//    public List<Order> findAll() {
//        return this.orderRepository.findAll();
//    }
//
//    @Override
//    public Optional<Order> findById(Long id) {
//        return this.orderRepository.findById(id);
//    }
//    @Override
//    public Order save(Order order){
//        orderRepository.save(order);
//        return order;
//    }
//    @Override
//    public void deleteByName(String name){
//        orderRepository.deleteByName(name);
//    }
//
//}
