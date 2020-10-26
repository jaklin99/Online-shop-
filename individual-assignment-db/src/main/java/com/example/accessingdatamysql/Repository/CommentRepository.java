package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface CommentRepository extends JpaRepository<Comment, Long> {
}
