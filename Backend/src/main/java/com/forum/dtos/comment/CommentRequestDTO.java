package com.forum.dtos.comment;

public record CommentRequestDTO(
    String content,
    Long userId,
    Long topicId
) {}
