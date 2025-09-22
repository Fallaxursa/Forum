package com.forum.mappers;

import com.forum.dtos.TopicRequestDTO;
import com.forum.dtos.TopicResponseDTO;
import com.forum.dtos.TopicUpdateDTO;
import com.forum.models.Topic;
import com.forum.models.User;
import org.springframework.stereotype.Component;

@Component
public class TopicMapper {
    public Topic toEntity(TopicRequestDTO dto, User user) {
        Topic topic = new Topic();
        topic.setTitle(dto.title());
        topic.setContent(dto.content());
        topic.setUser(user);
        return topic;
    }

    public void updateEntity(Topic topic, TopicUpdateDTO dto) {
        topic.setTitle(dto.title());
        topic.setContent(dto.content());
    }

    public TopicResponseDTO toDTO(Topic topic) {
        return new TopicResponseDTO(
                topic.getId(),
                topic.getTitle(),
                topic.getContent(),
                topic.getUser().getUsername()
        );
    }
}
