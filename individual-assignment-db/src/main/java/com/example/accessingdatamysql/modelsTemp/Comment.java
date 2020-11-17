package com.example.accessingdatamysql.modelsTemp;

import com.sun.istack.NotNull;
import javax.persistence.*;

@Entity(name="COMMENT")
public class Comment{
    @Id
    @Column(name = "COMMENT_ID", nullable = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long commentId;

    @NotNull
    @Lob
    private String text;

    @ManyToOne(targetEntity = Post.class)
    @JoinColumn(name="post_id", referencedColumnName = "post_id")
    private Post post;
//
//    @ManyToOne(targetEntity = User.class)
//    @JoinColumn(name="user_id", referencedColumnName = "user_id")
//    private User user;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public long getCommentId() {
        return commentId;
    }

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
    public Comment(){}
}//content/ids - post,customer- foreign key/id za comments
