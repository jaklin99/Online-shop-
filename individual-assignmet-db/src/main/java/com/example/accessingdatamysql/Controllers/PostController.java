package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.PostRepository;
import com.example.accessingdatamysql.ResourceNotFoundException;
import com.example.accessingdatamysql.modelsTemp.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/post")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/all")
    public Iterable<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @PostMapping("/add")
    public @ResponseBody
    Post addNewPost(@RequestBody Post post) {
        postRepository.save(post);
        return post;
    }

    @PutMapping("/{postId}/update")
    public Post updatePost(@PathVariable long postId, @RequestBody Post postRequest) {
        return postRepository.findById(postId).map(post -> {
            post.setTitle(postRequest.getTitle());
            post.setDescription(postRequest.getDescription());
            // post.setContent(postRequest.getContent());
            return postRepository.save(post);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }


    @DeleteMapping("/{postId}/delete")
    public ResponseEntity<?> deletePost(@PathVariable Long postId) {
        return postRepository.findById(postId).map(post -> {
            postRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }

}
