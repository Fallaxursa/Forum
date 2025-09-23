package com.forum.dtos.topic;

public record TopicResponseDTO(
        Long id,
        String title,
        String content,
        String username
) {}
