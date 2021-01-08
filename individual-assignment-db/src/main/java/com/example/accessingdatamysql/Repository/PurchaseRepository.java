package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}
