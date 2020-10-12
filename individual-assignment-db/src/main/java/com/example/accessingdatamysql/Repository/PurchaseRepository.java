package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Purchase;
import org.springframework.data.repository.CrudRepository;

public interface PurchaseRepository extends CrudRepository<Purchase, Long> {
}
