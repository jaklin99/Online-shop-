package com.example.accessingdatamysql.Services;
import com.example.accessingdatamysql.Repository.CommentRepository;
import com.example.accessingdatamysql.modelsTemp.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }
}

