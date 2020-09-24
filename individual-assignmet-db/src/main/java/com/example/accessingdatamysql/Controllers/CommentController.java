package com.example.accessingdatamysql.Controllers;
import com.example.accessingdatamysql.Repository.CommentRepository;
import com.example.accessingdatamysql.Repository.PostRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Comment;
import com.example.accessingdatamysql.modelsTemp.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/comment")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/all")
    public  @ResponseBody Iterable<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    @PostMapping("/posts/{postId}/comments")
    public Comment createComment(@PathVariable (value = "postId") Long postId,
                                 @RequestBody Comment comment) {
        return postRepository.findById(postId).map(post -> {
            comment.setPost(post);
            return commentRepository.save(comment);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }
    @PostMapping(path = "/add")
    public @ResponseBody
    Comment addNewComment(@RequestBody Comment comment) {
        commentRepository.save(comment);
        return comment;
    }
    @PutMapping("/posts/{postId}/comments/{commentId}")
    public Comment updateComment(@PathVariable (value = "postId") Long postId,
                                 @PathVariable (value = "commentId") Long commentId,
                                 @RequestBody Comment commentRequest) {
        if(!postRepository.existsById(postId)) {
            throw new ResourceNotFoundException("PostId " + postId + " not found");
        }

        return commentRepository.findById(commentId).map(comment -> {
            comment.setText(commentRequest.getText());
            return commentRepository.save(comment);
        }).orElseThrow(() -> new ResourceNotFoundException("CommentId " + commentId + "not found"));
    }

    @DeleteMapping("/{id}/delete")
    public void deleteComment(@PathVariable("id") long id) throws Exception {
        commentRepository.deleteById(id);
    }
}