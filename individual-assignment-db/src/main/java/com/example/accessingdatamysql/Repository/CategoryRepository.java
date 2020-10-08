package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Category;
import com.example.accessingdatamysql.modelsTemp.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
}
