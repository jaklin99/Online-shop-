package com.example.accessingdatamysql.Controllers;
import com.example.accessingdatamysql.Repository.CommentRepository;
import com.example.accessingdatamysql.Repository.PostRepository;
import com.example.accessingdatamysql.Services.CommentService;
import com.example.accessingdatamysql.modelsTemp.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/comment")
@CrossOrigin(origins = "http://localhost:3000")

public class CommentController {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentService commentService;

    @GetMapping("/all")
    public  @ResponseBody
    List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

//    @PostMapping("/posts/{postId}/comments")
//    public Comment createComment(@PathVariable (value = "postId") Long postId,
//                                 @RequestBody Comment comment) {
//        return postRepository.findById(postId).map(post -> {
//            comment.setPost(post);
//            return commentRepository.save(comment);
//        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
//    }

    @PostMapping("/add")
    public ResponseEntity<Comment> addNewComment(@RequestBody Comment comment) {
        commentRepository.save(comment);
        return new ResponseEntity<Comment>(HttpStatus.CREATED);
    }

    @PutMapping("/posts/{postId}/comments/{commentId}/update")
    public ResponseEntity<Comment> updateComment(@PathVariable long commentid,@PathVariable long postId, @RequestBody Comment updatedComment) {
        if (postRepository.existsById(postId)){
            commentRepository.findById(commentid).map(c -> {
                c.setText(c.getText());
                commentRepository.save(c);
                return updatedComment;
            });
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Comment> deleteComment(@PathVariable long id){
        if (commentRepository.existsById(id)) {
            commentRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}