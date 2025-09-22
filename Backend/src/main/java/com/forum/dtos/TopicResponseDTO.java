package com.forum.dtos;

public record TopicResponseDTO(
        Long id,
        String title,
        String content,
        String username
) {}
