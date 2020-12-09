package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.OrderDetailsRepository;
import com.example.accessingdatamysql.modelsTemp.OrderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailsService implements IOrderDetailsService{
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;
    @Override
    public List<OrderDetails>  getAllByOrderOrderNr(String nr) {
        return orderDetailsRepository. getAllByOrderOrderNr(nr);
    }

    @Override
    public void deleteAllByOrder_Id(long id) {
        orderDetailsRepository.deleteAllByOrder_Id(id);
    }

    @Override
    public void deleteById(long id) {
        orderDetailsRepository.deleteById(id);
    }

    @Override
    public Boolean existsById(long id) {
        return orderDetailsRepository.existsById(id);
    }

    @Override
    public OrderDetails save(OrderDetails orderDetails) {
        return orderDetailsRepository.save(orderDetails);
    }

    @Override
    public OrderDetails getOne(long id) {
        return orderDetailsRepository.getOne(id);
    }
}
