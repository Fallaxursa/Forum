package com.forum.services;

import com.forum.dtos.TopicRequestDTO;
import com.forum.dtos.TopicResponseDTO;
import com.forum.dtos.TopicUpdateDTO;
import com.forum.exceptions.TopicNotFoundException;
import com.forum.exceptions.UserNotFoundException;
import com.forum.mappers.TopicMapper;
import com.forum.models.Topic;
import com.forum.models.User;
import com.forum.repositories.TopicRepository;
import com.forum.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TopicService {
    private final TopicRepository topicRepository;
    private final UserRepository userRepository;
    private final TopicMapper topicMapper;

    @Autowired
    public TopicService(TopicRepository topicRepository, UserRepository userRepository, TopicMapper topicMapper) {
        this.topicRepository = topicRepository;
        this.userRepository = userRepository;
        this.topicMapper = topicMapper;
    }

    @Transactional
    public TopicResponseDTO createTopic(TopicRequestDTO requestDTO) {
        User user = userRepository.findById(requestDTO.userId())
                .orElseThrow(() -> new UserNotFoundException("User not found!"));

        Topic topic = topicMapper.toEntity(requestDTO, user);
        topicRepository.save(topic);
        return topicMapper.toDTO(topic);
    }

    public TopicResponseDTO getTopicById(Long id) {
        Topic topic = topicRepository.findById(id)
                .orElseThrow(() -> new TopicNotFoundException("Topic not found!"));
        return topicMapper.toDTO(topic);
    }

    public List<TopicResponseDTO> getAllTopics() {
        List<Topic> topics = topicRepository.findAll();
        return topics.stream()
                .map(topicMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public TopicResponseDTO updateTopic(Long id, TopicUpdateDTO updateDTO) {
        Topic topic = topicRepository.findById(id)
                .orElseThrow(() -> new TopicNotFoundException("Topic not found!"));
        topicMapper.updateEntity(topic, updateDTO);
        topicRepository.save(topic);
        return topicMapper.toDTO(topic);
    }

    @Transactional
    public void deleteTopic(Long id) {
        Topic topic = topicRepository.findById(id)
                .orElseThrow(() -> new TopicNotFoundException("Topic not found!"));
        topicRepository.delete(topic);
    }

    public List<TopicResponseDTO> getTopicsByUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found!"));

        List<Topic> topics = topicRepository.findAllByUser(user);
        return topics.stream()
                .map(topicMapper::toDTO)
                .collect(Collectors.toList());
    }
}
