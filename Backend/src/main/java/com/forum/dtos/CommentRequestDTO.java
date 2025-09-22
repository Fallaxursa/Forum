package com.forum.dtos;

public record CommentRequestDTO(
    String content,
    Long userId,
    Long topicId
) {}
