package com.forum.services;

import com.forum.dtos.CommentRequestDTO;
import com.forum.dtos.CommentResponseDTO;
import com.forum.dtos.CommentUpdateDTO;
import com.forum.exceptions.CommentNotFoundException;
import com.forum.exceptions.TopicNotFoundException;
import com.forum.exceptions.UserNotFoundException;
import com.forum.mappers.CommentMapper;
import com.forum.models.Comment;
import com.forum.models.Topic;
import com.forum.models.User;
import com.forum.repositories.CommentRepository;
import com.forum.repositories.TopicRepository;
import com.forum.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final TopicRepository topicRepository;
    private final UserRepository userRepository;
    private final CommentMapper commentMapper;

    @Autowired
    public CommentService(CommentRepository commentRepository,
                          TopicRepository topicRepository,
                          UserRepository userRepository,
                          CommentMapper commentMapper) {
        this.commentRepository = commentRepository;
        this.topicRepository = topicRepository;
        this.userRepository = userRepository;
        this.commentMapper = commentMapper;
    }

    @Transactional
    public CommentResponseDTO createComment(CommentRequestDTO requestDTO) {
        User user = userRepository.findById(requestDTO.userId())
                .orElseThrow(() -> new UserNotFoundException("User not found!"));

        Topic topic = topicRepository.findById(requestDTO.topicId())
                .orElseThrow(() -> new TopicNotFoundException("Topic not found!"));

        Comment comment = commentMapper.toEntity(requestDTO, user, topic);
        commentRepository.save(comment);
        return commentMapper.toDTO(comment);
    }

    public CommentResponseDTO getCommentById(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found!"));
        return commentMapper.toDTO(comment);
    }

    @Transactional
    public CommentResponseDTO updateComment(Long id, CommentUpdateDTO updateDTO) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found!"));
        commentMapper.updateEntity(comment, updateDTO);
        commentRepository.save(comment);
        return commentMapper.toDTO(comment);
    }

    @Transactional
    public void deleteComment(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found!"));
        commentRepository.delete(comment);
    }

    public List<CommentResponseDTO> getAllComments() {
        return commentRepository.findAll()
                .stream()
                .map(commentMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<CommentResponseDTO> getCommentsByTopic(Long topicId) {
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new TopicNotFoundException("Topic not found!"));

        return commentRepository.findAllByTopic(topic)
                .stream()
                .map(commentMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<CommentResponseDTO> getCommentsByUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found!"));

        return commentRepository.findAllByUser(user)
                .stream()
                .map(commentMapper::toDTO)
                .collect(Collectors.toList());
    }
}
