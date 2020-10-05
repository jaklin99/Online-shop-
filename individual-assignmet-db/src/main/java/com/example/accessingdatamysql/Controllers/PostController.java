package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.PostRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Post;
import com.example.accessingdatamysql.modelsTemp.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/post")
@CrossOrigin(origins = "http://localhost:3000")

public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/all")
    public Iterable<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Post> addNewPost(@RequestBody Post post) {
        postRepository.save(post);
        return new ResponseEntity<Post>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Post> updatePost(@PathVariable long postId, @RequestBody Post updatedPost) {
        if (postRepository.existsById(postId)){
            postRepository.findById(postId).map(p -> {
                p.setTitle(p.getTitle());
                p.setDescription(p.getDescription());
                postRepository.save(p);
                return updatedPost;
            });
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Post> deletePost(@PathVariable long id){
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
