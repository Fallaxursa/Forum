package com.forum.dtos;

public record TopicRequestDTO(
        Long userId,
        String title,
        String content
) {}
