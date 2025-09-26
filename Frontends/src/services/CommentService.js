import axios from "axios";
import { API_BASE_COMMENT } from "../components/Constants";

const createComment = async (requestDTO) => {
    const response = await axios.post(`${API_BASE_COMMENT}`, requestDTO);
    return response.data;
};

const getComment = async (id) => {
    const response = await axios.get(`${API_BASE_COMMENT}/${id}`);
    return response.data;
};

const updateComment = async (id, updateDTO) => {
    const response = await axios.put(`${API_BASE_COMMENT}/${id}`, updateDTO);
    return response.data;
};

const deleteComment = async (id) => {
    const response = await axios.delete(`${API_BASE_COMMENT}/${id}`);
    return response.data;
};

const getAllComments = async () => {
    const response = await axios.get(`${API_BASE_COMMENT}`);
    return response.data;
};

const getcommentsByTopic = async (topicId) => {
    const response = await axios.get(`${API_BASE_COMMENT}/topic/${topicId}`);
    return response.data;
};

const getCommentByUser = async (userId) => {
    const response = await axios.get(`${API_BASE_COMMENT}/user/${userId}`);
    return response.data;
};

export default {
    createComment,
    getComment,
    updateComment,
    deleteComment,
    getAllComments,
    getcommentsByTopic,
    getCommentByUser
};