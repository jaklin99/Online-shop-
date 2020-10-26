package com.example.accessingdatamysql.Repository;

import com.example.accessingdatamysql.modelsTemp.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface PostRepository extends JpaRepository<Post, Long> {

}
