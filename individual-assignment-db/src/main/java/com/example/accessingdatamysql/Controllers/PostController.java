package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.PostRepository;
import com.example.accessingdatamysql.modelsTemp.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


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
        return new ResponseEntity<Post>(HttpStatus.CREATED);
    }
    @GetMapping("/{postId}")
    public ResponseEntity<Post> getPostById(@PathVariable("postId") long id) {
        Optional<Post> postInfo = postRepository.findById(id);
        return postInfo.map(post -> new ResponseEntity<>(post, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
//
//    @PutMapping("/{postId}/update")
//    public ResponseEntity<Post> updatePost(@PathVariable long postId, @RequestBody Post updatedPost) {
//        if (postRepository.existsById(postId)){
//            postRepository.findById(postId).map(p -> {
//                p.setTitle(p.getTitle());
//                p.setDescription(p.getDescription());
//                postRepository.save(p);
//                return updatedPost;
//            });
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        else
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//	}
@PutMapping("/{postId}/update")
public ResponseEntity<Post> updatePost(@PathVariable long postId, @RequestBody Post updatedPost) {
    Optional<Post> postInfo = postRepository.findById(postId);
    if (postInfo.isPresent()) {
        Post post = postInfo.get();
        post.setTitle(updatedPost.getTitle());
        post.setDescription(updatedPost.getDescription());
        postRepository.save(post);
        return new ResponseEntity<>(post, HttpStatus.NO_CONTENT);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
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
