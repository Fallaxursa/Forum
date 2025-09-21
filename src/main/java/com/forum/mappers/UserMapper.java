package com.forum.mappers;

import com.forum.dtos.UserRequestDTO;
import com.forum.dtos.UserResponseDTO;
import com.forum.dtos.UserUpdateDTO;
import com.forum.models.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    //Convert dto to entity.
    public User toEntity(UserRequestDTO dto) {
        return new User(dto.username());
    }

    //Updates username to dto username.
    public void updateEntity(User user, UserUpdateDTO dto) {
        user.setUsername(dto.username());
    }

    //Converts user to dto.
    public UserResponseDTO toDTO(User user) {
        return new UserResponseDTO(user.getId(), user.getUsername());
    }
}
