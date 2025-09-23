import axios from "axios";
import { API_BASE_TOPIC } from "../components/Constants";

const createTopic = async (requestDTO) => {
    const response = await axios.post(`${API_BASE_TOPIC}`, requestDTO);
    return response.data;
};

const getTopic = async (id) => {
    const response = await axios.get(`${API_BASE_TOPIC}/${id}`);
    return response.data;
};

const getAllTopics = async () => {
    const response = await axios.get(`${API_BASE_TOPIC}`);
    return response.data;
};

const updateTopic = async (id, updateDTO) => {
    const response = await axios.put(`${API_BASE_TOPIC}/${id}`, updateDTO);
    return response.data;
};

const deleteTopic = async (id) => {
    const response = await axios.delete(`${API_BASE_TOPIC}/${id}`);
    return response.data;
};

const getTopicByUser = async (userId) => {
    const response = await axios.get(`${API_BASE_TOPIC}/user/${userId}`);
    return response.data;
};

export default {
    createTopic,
    getTopic,
    getAllTopics,
    updateTopic,
    deleteTopic,
    getTopicByUser
};