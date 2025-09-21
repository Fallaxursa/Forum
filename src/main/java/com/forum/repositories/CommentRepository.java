package com.forum.repositories;

import com.forum.models.Comment;
import com.forum.models.Topic;
import com.forum.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByTopic(Topic topic);
    List<Comment> findAllByUser(User user);
}
