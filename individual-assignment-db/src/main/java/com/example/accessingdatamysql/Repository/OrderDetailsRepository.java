package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Order;
import com.example.accessingdatamysql.modelsTemp.OrderDetails;
import com.example.accessingdatamysql.modelsTemp.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {

    List<OrderDetails> getAllByOrder_Id(Long id);
    void deleteAllByOrder_Id(long id);

}
