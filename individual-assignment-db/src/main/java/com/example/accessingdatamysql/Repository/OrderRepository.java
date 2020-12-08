package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Category;
import com.example.accessingdatamysql.modelsTemp.Order;
import com.example.accessingdatamysql.modelsTemp.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    Optional<Order> findById(long id);
    List<Order> findAllByStatusOrder(OrderStatus orderStatus);
    Optional<Order> findByOrderNr(String orderNr);
    boolean existsByName(String name);
    void deleteByName(String name);
}
