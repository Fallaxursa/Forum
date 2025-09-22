package com.forum.mappers;

import com.forum.dtos.CommentRequestDTO;
import com.forum.dtos.CommentResponseDTO;
import com.forum.dtos.CommentUpdateDTO;
import com.forum.models.Comment;
import com.forum.models.Topic;
import com.forum.models.User;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {
    public Comment toEntity(CommentRequestDTO dto, User user, Topic topic) {
        Comment comment = new Comment();
        comment.setContent(dto.content());
        comment.setUser(user);
        comment.setTopic(topic);
        return comment;
    }

    public void updateEntity(Comment comment, CommentUpdateDTO dto) {
        comment.setContent(dto.content());
    };

    public CommentResponseDTO toDTO(Comment comment) {
        return new CommentResponseDTO(
                comment.getId(),
                comment.getContent(),
                comment.getUser().getUsername(),
                comment.getTopic().getId()
        );
    }
}
