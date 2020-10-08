package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Comment;
import org.springframework.data.repository.CrudRepository;


public interface CommentRepository extends CrudRepository<Comment, Long> {
}
