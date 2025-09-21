package com.forum.controllers;

import com.forum.models.User;
import com.forum.repositories.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {
    private final UserRepository userRepository;

    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void loadUsers() {
        userRepository.save(new User("greg"));
        userRepository.save(new User("kaas"));
        userRepository.save(new User("ham"));
    }
}
