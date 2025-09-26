package com.forum.dtos.topic;

import com.forum.models.Comment;

import java.util.List;

public record TopicResponseDTO(
        Long id,
        String title,
        String content,
        String username
) {}
