package com.forum.dtos.topic;

public record TopicRequestDTO(
        Long userId,
        String title,
        String content
) {}
