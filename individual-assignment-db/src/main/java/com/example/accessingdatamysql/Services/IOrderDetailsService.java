package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.modelsTemp.Order;
import com.example.accessingdatamysql.modelsTemp.OrderDetails;
import com.example.accessingdatamysql.modelsTemp.OrderStatus;

import java.util.List;
import java.util.Optional;

public interface IOrderDetailsService {
    //List<OrderDetails> getAllByOrder_Id(long id);
    List<OrderDetails>  getAllByOrderOrderNr(String nr);
   void deleteAllByOrder_Id(long id);
    void deleteById(long id);
    Boolean existsById(long id);
    OrderDetails save(OrderDetails orderDetails);
    OrderDetails getOne(long id);

}
