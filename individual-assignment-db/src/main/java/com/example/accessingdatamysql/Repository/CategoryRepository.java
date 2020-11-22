package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
