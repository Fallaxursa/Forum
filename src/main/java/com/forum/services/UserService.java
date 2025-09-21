package com.forum.services;

import com.forum.dtos.UserRequestDTO;
import com.forum.dtos.UserResponseDTO;
import com.forum.dtos.UserUpdateDTO;
import com.forum.exceptions.UserNotFoundException;
import com.forum.mappers.UserMapper;
import com.forum.models.User;
import com.forum.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Autowired
    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public UserResponseDTO login(UserRequestDTO dto) {
        User user = userRepository.findByUsername(dto.username())
                .orElseThrow(() -> new UserNotFoundException("User with username: " + dto.username() + " not found!"));
        return userMapper.toDTO(user);
    }

    public UserResponseDTO createUser(UserRequestDTO dto) {
        User user = userRepository.save(userMapper.toEntity(dto));
        return userMapper.toDTO(user);
    }

    public UserResponseDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found!"));
        return userMapper.toDTO(user);
    }

    public UserResponseDTO updateUser(Long id, UserUpdateDTO dto) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found!"));
        userMapper.updateEntity(user, dto);
        userRepository.save(user);
        return userMapper.toDTO(user);
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found!"));
        userRepository.delete(user);
    }
}
