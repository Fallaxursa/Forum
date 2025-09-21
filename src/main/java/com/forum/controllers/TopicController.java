package com.forum.controllers;

import com.forum.dtos.TopicRequestDTO;
import com.forum.dtos.TopicResponseDTO;
import com.forum.dtos.TopicUpdateDTO;
import com.forum.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/topics")
public class TopicController {
    private final TopicService topicService;

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @PostMapping
    public ResponseEntity<TopicResponseDTO> createTopic(@RequestBody TopicRequestDTO requestDTO) {
        TopicResponseDTO dto = topicService.createTopic(requestDTO);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TopicResponseDTO> getTopic(@PathVariable Long id) {
        TopicResponseDTO dto = topicService.getTopicById(id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping
    public ResponseEntity<List<TopicResponseDTO>> getAllTopics() {
        List<TopicResponseDTO> topics = topicService.getAllTopics();
        return ResponseEntity.ok(topics);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TopicResponseDTO> updateTopic(@PathVariable Long id, @RequestBody TopicUpdateDTO updatedto) {
        TopicResponseDTO dto = topicService.updateTopic(id, updatedto);
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTopic(@PathVariable Long id) {
        topicService.deleteTopic(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TopicResponseDTO>> getTopicsByUser(@PathVariable Long userId) {
        List<TopicResponseDTO> topics = topicService.getTopicsByUser(userId);
        return ResponseEntity.ok(topics);
    }
}
