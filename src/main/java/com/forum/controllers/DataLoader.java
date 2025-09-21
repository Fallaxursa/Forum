package com.forum.controllers;

import com.forum.models.Comment;
import com.forum.models.Topic;
import com.forum.models.User;
import com.forum.repositories.CommentRepository;
import com.forum.repositories.TopicRepository;
import com.forum.repositories.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {
    private final UserRepository userRepository;
    private final TopicRepository topicRepository;
    private final CommentRepository commentRepository;

    public DataLoader(UserRepository userRepository, TopicRepository topicRepository, CommentRepository commentRepository) {
        this.userRepository = userRepository;
        this.topicRepository = topicRepository;
        this.commentRepository = commentRepository;
    }

    @PostConstruct
    public void loadUsers() {
        if (userRepository.count() == 0) {
            userRepository.save(new User("greg"));
            userRepository.save(new User("kaas"));
            userRepository.save(new User("ham"));
        }
    }

    public void loadTopics() {
        if (topicRepository.count() == 0) {
            User user = userRepository.findByUsername("greg").orElseThrow();
            topicRepository.save(new Topic(user, "First topic", "Content here"));
            topicRepository.save(new Topic(user, "Second topic", "content aaaaaaa"));
        }
    }

    public void loadComments() {
        if (commentRepository.count() == 0) {
            Topic topic = topicRepository.findAll().stream().findFirst().orElseThrow();
            User user = userRepository.findByUsername("kaas").orElseThrow();
            commentRepository.save(new Comment("Nice Post cuh", user, topic));
        }
    }
}
