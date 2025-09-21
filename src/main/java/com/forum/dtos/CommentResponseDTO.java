package com.forum.dtos;

public record CommentResponseDTO(
        Long id,
        String content,
        String username,
        Long topicId
) {}
