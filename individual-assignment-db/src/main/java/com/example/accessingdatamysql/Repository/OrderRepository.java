//package com.example.accessingdatamysql.Repository;
//
//import com.example.accessingdatamysql.modelsTemp.Order;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface OrderRepository extends JpaRepository<Order, Long> {
//    @Query(value = "SELECT * FROM ORDERS WHERE user_id = ?1 AND status = 'NOT_CONFIRMED_BY_USER'", nativeQuery = true)
//    Order getUserShoppingCart(Long id);
//    @Query(value = "SELECT * FROM ORDERS WHERE user_id = ?1 AND NOT status = 'NOT_CONFIRMED_BY_USER' ORDER BY order_date", nativeQuery = true)
//    List<Order> getAllSubmittedOrdersByUserId(Long id);
//    @Query(value = "SELECT * FROM ORDERS WHERE status = 'PENDING' ORDER BY order_date", nativeQuery = true)
//    List<Order> getAllPendingOrders();
//   @Query(value = "SELECT * FROM ORDERS WHERE status = 'DELIVERED' OR status = 'FINISHED' ORDER BY order_date DESC", nativeQuery = true)
//    List<Order> getAllCollectedOrders();
//}
