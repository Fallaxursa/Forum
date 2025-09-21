package com.forum.dtos;

public record TopicRequestDTO(
        Long id,
        String title,
        String content
) {}
