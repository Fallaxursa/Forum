package com.forum.dtos.comment;

public record CommentResponseDTO(
        Long id,
        String content,
        String username,
        Long topicId
) {}
