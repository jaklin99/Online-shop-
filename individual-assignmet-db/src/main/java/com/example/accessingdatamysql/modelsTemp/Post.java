package com.example.accessingdatamysql.modelsTemp;
import javax.persistence.*;
import java.util.*;

@Entity(name="post")
public class Post{
    @Id
    @Column(name = "POST_ID", nullable = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long postId;

    @Column(unique = true, length = 100)
    private String title;

    @Column(updatable = true, length = 100)
    private String description;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    //@JoinColumn(name = "post_id")
    private List<Comment> comments = new ArrayList<>();

    public long getPostId() {
        return postId;
    }

    public void setPostId(long postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
