package com.forum.controllers;

import com.forum.dtos.comment.CommentRequestDTO;
import com.forum.dtos.comment.CommentResponseDTO;
import com.forum.dtos.comment.CommentUpdateDTO;
import com.forum.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/comments")
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity<CommentResponseDTO> createComment(@RequestBody CommentRequestDTO requestDTO) {
        CommentResponseDTO response = commentService.createComment(requestDTO);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommentResponseDTO> getComment(@PathVariable Long id) {
        CommentResponseDTO response = commentService.getCommentById(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CommentResponseDTO> updateComment(@PathVariable Long id, @RequestBody CommentUpdateDTO updateDTO) {
        CommentResponseDTO response = commentService.updateComment(id, updateDTO);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<CommentResponseDTO>> getAllComments() {
        List<CommentResponseDTO> comments = commentService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/topic/{topicId}")
    public ResponseEntity<List<CommentResponseDTO>> getCommentsByTopic(@PathVariable Long topicId) {
        List<CommentResponseDTO> comments = commentService.getCommentsByTopic(topicId);
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/user/{userId}")
    public  ResponseEntity<List<CommentResponseDTO>> getCommentsByUser(@PathVariable Long userId) {
        List<CommentResponseDTO> comments = commentService.getCommentsByUser(userId);
        return ResponseEntity.ok(comments);
    }
}
